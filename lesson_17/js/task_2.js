"use strict";
if (confirm('Почати тестування?')) {
    class ServiceCar {
        constructor(driver, brand, autoNumber) {
            if (ServiceCar.driverRef)
                return ServiceCar.driverRef;
            if (ServiceCar.brandRef)
                return ServiceCar.brandRef;
            if (ServiceCar.autoNumberRef)
                return ServiceCar.autoNumberRef;
            ServiceCar.driverRef = driver;
            ServiceCar.brandRef = brand;
            ServiceCar.autoNumberRef = autoNumber;
        }
        toString() {
            return `Водій - ${ServiceCar.driverRef} <br>
				Марка авто - ${ServiceCar.brandRef} <br>
				Номер авто - ${ServiceCar.autoNumberRef}<hr>`;
        }
    }
    const car1 = new ServiceCar('Ken Block', 'Koenigsegg', '007');
    document.write(car1.toString());
    const car2 = new ServiceCar('Emilien', 'Trabant', '000');
    document.write(`Створюємо, та змінюємо на: <br> Водій - Emilien <br>
	Марка авто - Trabant <br> Номер авто - 000 <br> <br>Результат: <br> <br> ${car2}`);
}
