// المنتظر لحين تحميل عناصر الصفحة بالكامل قبل تشغيل الأكواد
document.addEventListener('DOMContentLoaded', function () {

    // 1. تحديد العناصر من الـ HTML باستخدام الـ ID والـ Class
    const addBtn = document.getElementById('dropdownMenuButton'); // زر علامة الزائد (+)
    const dropdownMenu = document.querySelector('.dropdown-menu'); // القائمة المنسدلة

    // 2. إضافة حدث الضغط (Click) على زر علامة الزائد (+)
    addBtn.addEventListener('click', function (event) {
        // منع انتشار الحدث لباقي الصفحة حتى لا تقفل القائمة فور فتحها
        event.stopPropagation();
        
        // تبديل فئة "show" (لو موجودة يتم إزالتها، ولو مش موجودة يتم إضافتها)
        dropdownMenu.classList.toggle('show');
    });

    // 3. إضافة حدث الضغط في أي مكان في الشاشة لإغلاق القائمة
    document.addEventListener('click', function (event) {
        // التحقق مما إذا كان الضغط تم خارج زر الزائد وخارج القائمة المنسدلة
        if (!addBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            // إزالة فئة "show" لإخفاء القائمة
            dropdownMenu.classList.remove('show');
        }
    });

});