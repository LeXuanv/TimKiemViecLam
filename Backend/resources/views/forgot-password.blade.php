<!DOCTYPE html>
<html>
<head>
    <title>Yêu cầu thay đổi mật khẩu</title>
</head>
<body>
    <p>Xin chào {{ $user->email ?? 'Người dùng' }},</p>
    <p>Mã xác thực của bạn là: <strong>{{ $code }}</strong></p>
    <p>Mã này sẽ hết hạn sau 15 phút.</p>
    <p>Tuyệt đối không chia sẻ mã xá thực cho bất cứ ai vì yêu cầu bảo mật.</p>

</body>
</html>
