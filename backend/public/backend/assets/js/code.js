$(function(){
    $(document).on('click','#delete',function(e){
        e.preventDefault();
        var link = $(this).attr("href");

                  Swal.fire({
                    title: '本当に削除して良いですか?',
                    text: "データを削除してもよいですか?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'はい、削除します。',
                    cancelButtonText: "キャンセル",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = link
                      Swal.fire(
                        '削除完了',
                        'データを削除しました',
                        'success'
                      )
                    }
                  })
    });
  });
