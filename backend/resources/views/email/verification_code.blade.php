<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>認証コードの確認</title>
    <style>
        /* Tailwind CSS のスタイルをインライン化するために、メール配信サービスでの最適化を推奨 */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>

<body class="bg-gray-100">
    <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8">
        <div class="bg-blue-600 text-white text-center py-4">
            <h1 class="text-2xl font-semibold">認証コードをご確認ください</h1>
        </div>
        <div class="p-6">
            <p class="text-gray-700 text-lg mb-4">
                こんにちは、
            </p>
            <p class="text-gray-700 mb-6">
                あなたのアカウントを安全に保つために、以下の認証コードを使用してログインを完了してください。
            </p>

            <div class="text-center my-6">
                <span class="inline-block bg-blue-100 text-blue-800 text-3xl font-semibold px-6 py-3 rounded-lg">
                    {{ $code }}
                </span>
            </div>

            <p class="text-gray-700">
                認証コードの有効期限は10分です。認証コードの有効期限が切れた場合、再度ログインを行ってください。
            </p>

            <p class="text-gray-700 mt-6">
                ご不明な点がございましたら、サポートチームまでご連絡ください。
            </p>
        </div>

        <div class="bg-gray-50 text-center py-4">
            <p class="text-gray-500 text-sm">
                &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
            </p>
        </div>
    </div>
</body>

</html>
