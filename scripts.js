function heapify(arr, n, i) { // تعریف تابع heapify برای سازماندهی یک زیرهرم
    let largest = i; // فرض می‌کنیم بزرگترین عنصر، عنصر فعلی است
    let left = 2 * i + 1; // شاخص فرزند چپ
    let right = 2 * i + 2; // شاخص فرزند راست

    // اگر فرزند چپ بزرگتر از والد باشد، شاخص فرزند چپ رو به عنوان بزرگترین در نظر می‌گیریم
    if (left < n && arr[left] > arr[largest]) {
        largest = left; // تغییر شاخص بزرگترین عنصر به فرزند چپ
    }

    // اگر فرزند راست بزرگتر از بزرگترین عنصر فعلی باشد، شاخص فرزند راست رو به عنوان بزرگترین در نظر می‌گیریم
    if (right < n && arr[right] > arr[largest]) {
        largest = right; // تغییر شاخص بزرگترین عنصر به فرزند راست
    }

    // اگر بزرگترین عنصر فعلی تغییر کرده باشد، جایگزینی انجام می‌دهیم و به صورت بازگشتی ادامه می‌دهیم
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // جابجایی عناصر
        heapify(arr, n, largest); // فراخوانی بازگشتی برای سازماندهی زیرهرم
    }
}

function heapSort(arr) { // تعریف تابع heapSort برای مرتب‌سازی آرایه
    let n = arr.length; // تعیین اندازه آرایه

    // ساختن هرم از آرایه
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i); // فراخوانی تابع heapify برای هر عنصر
    }

    // مرتب‌سازی آرایه
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // جابجایی بزرگترین عنصر با آخرین عنصر
        heapify(arr, i, 0); // سازماندهی دوباره هرم
    }
}

let arr = [12, 11, 13, 5, 6, 7]; // تعریف یک آرایه نمونه
heapSort(arr); // فراخوانی تابع heapSort برای مرتب‌سازی آرایه
console.log("Sorted array is: " + arr); // نمایش آرایه مرتب‌شده در کنسول
