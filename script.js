function navigateTo(role) {
    if (role === 'admin') {
        window.location.href = 'pages/admin.html';
    } else if (role === 'teacher') {
        window.location.href = 'pages/teacher.html';
    } else if (role === 'student') {
        window.location.href = 'pages/student.html';
    }
}
