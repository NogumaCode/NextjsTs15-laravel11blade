<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;


class ServiceController extends Controller
{

    // Start Service api
    public function AllServices()
    {
        $service = Service::latest()->get();
        return $service;
    }
    public function getServiceBySlug($slug)
    {
        $service = Service::where('slug', $slug)->first();
        if (!$service) {
            return response()->json(['error' => 'Service not found'], 404);
        }
        return response()->json($service);
    }
    // End Service api

    public function AllService()
    {
        $service = Service::latest()->get();
        return view('backend.service.all_service', compact('service'));
    }

    public function AddService()
    {
        return view('backend.service.add_service');
    }

    public function StoreService(Request $request)
    {
        // バリデーション
        $request->validate([
            'service_name' => 'required|string|max:255',
            'service_short' => 'nullable|string',
            'service_desc' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048', // 必須の画像バリデーション
        ], [
            'service_name.required' => 'サービス名は必須項目です。',
            'image.required' => 'サービス画像をアップロードしてください。',
            'image.image' => 'アップロードされたファイルは画像でなければなりません。',
            'image.mimes' => '画像形式は jpg、jpeg、png、gif のいずれかである必要があります。',
            'image.max' => '画像のサイズは最大 2MB までです。',
        ]);

        // 画像処理
        $save_url = null;
        if ($request->file('image')) {
            $image = $request->file('image');
            $manager = new ImageManager(new Driver());
            $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $img = $manager->read($image);
            $img->resize(688, 436)->save(public_path('upload/service/' . $name_gen));
            $save_url = 'upload/service/' . $name_gen;
        }

        // サービスの登録
        Service::create([
            'service_name' => $request->service_name,
            'slug' => strtolower(str_replace(' ', '-', $request->service_name)),
            'service_short' => $request->service_short,
            'service_desc' => $request->service_desc,
            'icon' => $request->icon,
            'image' => $save_url,
        ]);

        // 成功通知
        $notification = [
            'message' => 'Service Inserted Successfully',
            'alert-type' => 'success'
        ];
        return redirect()->route('all.service')->with($notification);
    }


    public function EditService($id)
    {
        $service = Service::find($id);
        return view('backend.service.edit_service', compact('service'));
    }

    public function UpdateService(Request $request)
    {
        $service_id = $request->id;
        $service = Service::find($service_id);
        if ($request->file('image')) {
            $image = $request->file('image');
            $manager = new ImageManager(new Driver());
            $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $img = $manager->read($image);
            $img->resize(688, 436)->save(public_path('upload/service/' . $name_gen));
            $save_url = 'upload/service/' . $name_gen;
            if (file_exists(public_path($service->image))) {
                @unlink(public_path($service->image));
            }
            $service->update([
                'service_name' => $request->service_name,
                'slug' => strtolower(str_replace(' ', '-', $request->service_name)),
                'service_short' => $request->service_short,
                'service_desc' => $request->service_desc,
                'icon' => $request->icon,
                'image' => $save_url,
            ]);
            $notification = array(
                'message' => 'Service Updated with Image Successfully',
                'alert-type' => 'success'
            );
            return redirect()->route('all.service')->with($notification);
        } else {
            $service->update([
                'service_name' => $request->service_name,
                'slug' => strtolower(str_replace(' ', '-', $request->service_name)),
                'service_short' => $request->service_short,
                'service_desc' => $request->service_desc,
                'icon' => $request->icon,
            ]);
            $notification = array(
                'message' => 'Service Updated without Image Successfully',
                'alert-type' => 'success'
            );
            return redirect()->route('all.service')->with($notification);
        }
    }

    public function DeleteService($id)
    {
        $item = Service::find($id);
        $img = $item->image;
        unlink($img);
        Service::find($id)->delete();
        $notification = array(
            'message' => 'Service Delete Successfully',
            'alert-type' => 'success'
        );
        return redirect()->back()->with($notification);
    }
}
