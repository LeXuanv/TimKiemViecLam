<!DOCTYPE html>
<html>
<head>
    <title>Thông báo trạng thái đơn ứng tuyển</title>
</head>
<body>
    <h1>Kính gửi ứng viên,</h1>
    <p>Đơn ứng tuyển của bạn cho công việc <strong>{{ $jobVacancy->title ?? "cc" }}</strong> đã được xử lý.</p>
    <p>Trạng thái hiện tại: <strong>{{ $status }}</strong>.</p>
    <p>Trân trọng,</p>
    <p>Đội ngũ tuyển dụng</p>
</body>
</html>
