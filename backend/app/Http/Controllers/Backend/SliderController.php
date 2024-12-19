<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;


class SliderController extends Controller
{

    // Start Slider api
    public function ApiAllSlider()
    {
        $slider = Slider::latest()->get();
        return $slider;
    }
    // End Slider api

    public function AllSlider()
    {
        $slider = Slider::latest()->get();
        return view('backend.slider.all_slider', compact('slider'));
    }

    public function AddSlider()
    {
        return view('backend.slider.add_slider');
    }

    public function StoreSlider(Request $request)
    {
        // バリデーション
        $request->validate([
            'heading' => 'required|string|max:255',
            'description' => 'nullable|string',
            'link' => 'required|url',
            'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048', // 画像必須
        ], [
            'heading.required' => 'スライダーの見出しは必須です。',
            'link.required' => 'スライダーのリンクは必須です。',
            'link.url' => '有効なURLを入力してください。',
            'image.required' => 'スライダー画像をアップロードしてください。',
            'image.image' => 'アップロードされたファイルは画像である必要があります。',
            'image.mimes' => '画像形式はjpg、jpeg、png、gifのいずれかである必要があります。',
            'image.max' => '画像サイズは最大2MBです。',
        ]);

        // 画像処理
        if ($request->file('image')) {
            $image = $request->file('image');
            $manager = new ImageManager(new Driver());
            $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $img = $manager->read($image);
            $img->resize(1124, 750)->save(public_path('upload/slider/' . $name_gen));
            $save_url = 'upload/slider/' . $name_gen;

            // スライダーの作成
            Slider::create([
                'heading' => $request->heading,
                'description' => $request->description,
                'link' => $request->link,
                'image' => $save_url,
            ]);
        }

        // 通知
        $notification = [
            'message' => 'スライダーを正常に挿入しました。',
            'alert-type' => 'success',
        ];
        return redirect()->route('all.slider')->with($notification);
    }


    public function EditSlider($id)
    {
        $slider = Slider::find($id);
        return view('backend.slider.edit_slider', compact('slider'));
    }

    public function UpdateSlider(Request $request)
    {
        $slider_id = $request->id;
        $slider = Slider::find($slider_id);
        if ($request->file('image')) {
            $image = $request->file('image');
            $manager = new ImageManager(new Driver());
            $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $img = $manager->read($image);
            $img->resize(1124, 750)->save(public_path('upload/slider/' . $name_gen));
            $save_url = 'upload/slider/' . $name_gen;
            if (file_exists(public_path($slider->image))) {
                @unlink(public_path($slider->image));
            }
            $slider->update([
                'heading' => $request->heading,
                'description' => $request->description,
                'link' => $request->link,
                'image' => $save_url,
            ]);
            $notification = array(
                'message' => 'スライダーを更新しました。',
                'alert-type' => 'success'
            );
            return redirect()->route('all.slider')->with($notification);
        } else {
            $slider->update([
                'heading' => $request->heading,
                'description' => $request->description,
                'link' => $request->link,
            ]);
            $notification = array(
                'message' => 'スライダーが画像なしで更新されました',
                'alert-type' => 'success'
            );
            return redirect()->route('all.slider')->with($notification);
        }
    }

    public function DeleteSlider($id)
    {
        $item = Slider::find($id);
        $img = $item->image;
        unlink($img);
        Slider::find($id)->delete();
        $notification = array(
            'message' => 'スライダーを削除しました',
            'alert-type' => 'success'
        );
        return redirect()->back()->with($notification);
    }
}
