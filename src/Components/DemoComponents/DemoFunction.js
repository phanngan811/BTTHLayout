import React from 'react'

export default function DemoFunction() {
    //đối với function components bên dưới lệnh return sẽ là giao diện của thẻ<DemoFunction />
    // lưu ý: nội dụng của thẻ phải đc bao phủ bởi 1 thẻ
    return (
        <div>
            <p className= "p-2 bg-dark text-light">hello</p>
            <p>hello</p>
        </div>
    )
}
