<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Mail\VerificationCodeMail;



class AdminController extends Controller
{

    public function AdminLogout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }

    public function AdminLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $verificationCode = random_int(100000, 999999);

            session([
                'verification_code' => $verificationCode,
                'user_id' => $user->id,
                'code_expires_at' => now()->addMinutes(10), // 10分後に期限切れ
            ]);
            try {
                Mail::to($user->email)->send(new VerificationCodeMail($verificationCode));
            } catch (\Exception $e) {
                // エラーログを記録
                \Log::error('メール送信失敗: ' . $e->getMessage());
                // ユーザー通知
                Auth::logout();
                return redirect()->route('custom.verification.form')
                    ->with('error', '認証メールの送信に失敗しました。再度お試しください。');
            }

            Auth::logout();
            return redirect()->route('custom.verification.form')
                ->with('success', '認証メールを送信いたしました。');
        }

        return redirect()->back()->withErrors(['email' => '認証が正しくありません。']);
    }

    public function ShowVerification()
    {

        return view('auth.verify');
    }


    public function VerificationVerify(Request $request)
    {

        $request->validate([
            'code' => 'required|numeric|digits:6',
        ]);

        $sessionCode = session('verification_code');
        $userId = session('user_id');
        $expiresAt = session('code_expires_at');

        if (!$sessionCode || !$userId || !$expiresAt || now()->greaterThan($expiresAt)) {
            $errorMessage = now()->greaterThan($expiresAt)
                ? '認証コードの有効期限が切れました。再度ログインしてください。'
                : '認証コードが無効です。再度ログインしてください。';

            return redirect()->route('custom.verification.form')
                ->with('error', $errorMessage);
        }

        if ($request->code == session('verification_code')) {
            Auth::loginUsingId(session('user_id'));

            session()->forget(['verification_code', 'user_id', 'code_expires_at']);

            return redirect()->intended('/dashboard')->with('success', '二要素認証が完了しました。');
        }

        return back()->withErrors(['code' => '認証コードが正しくありません。']);
    }
}
