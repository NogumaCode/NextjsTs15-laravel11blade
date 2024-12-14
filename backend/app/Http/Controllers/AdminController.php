<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    
    public function AdminLogout(Request $request)
    {
        // 管理者用ガードでログアウト
        Auth::guard('web')->logout();
        // セッションを無効化
        $request->session()->invalidate();
        // CSRFトークンを再生成
        $request->session()->regenerateToken();

        // ログイン画面へリダイレクト
        return redirect('/login');
    }
}
