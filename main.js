var y = prompt('Введите максимальное значение');
for (var x = 2; x <= y; x++) {
    if (x % 2 == 0) continue;
    alert(x);
}