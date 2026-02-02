let count = 0;
let success = false;

while (count < 3) {
    let account = prompt("Mời bạn nhập tài khoản");
    let password = prompt("Nhập mật khẩu");

    if (account === "admin" && password === "12345") {
        alert("Đăng nhập thành công");
        success = true;
        break;
    } else {
        count++;
        let loginAttempts = 3 - count;

        if (account !== "admin" && password !== "12345") {
            alert(`Sai tài khoản và mật khẩu, bạn còn ${loginAttempts} lần nhập.`);
        } else if (account !== "admin") {
            alert(`Sai tài khoản, bạn còn ${loginAttempts} lần nhập.`);
        } else {
            alert(`Sai mật khẩu, bạn còn ${loginAttempts} lần nhập.`);
        }
    }
}

if (!success) {
    alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {

    let choice;
    do {
        choice = +prompt(
            "----------- MENU ------------\n" +
            "1. Phân loại mã số sách (Chẵn/Lẻ)\n" +
            "2. Thiết kế bản đồ kho sách (Dạng lưới)\n" +
            "3. Dự toán phí bảo trì sách theo năm\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n" +
            "Vui lòng nhập lựa chọn của bạn (1-5)"
        );

        switch (choice) {
            case 1:
                alert("Nhập mã số sách liên tục, nhập số 0 để kết thúc");
                let scienceBook = 0;
                let artBook = 0;
                let totalBook = 0;

                while (true) {
                    let bookID = Number(prompt("Nhập mã số sách:"));
                    if (isNaN(bookID)) {
                        alert("Vui lòng nhập số nguyên hợp lệ");
                        continue;
                    }
                    if (bookID === 0) break;

                    totalBook++;
                    if (bookID % 2 === 0) scienceBook++;
                    else artBook++;
                }

                console.log("Tổng số mã sách đã nhập:", totalBook);
                console.log("Sách khoa học (chẵn):", scienceBook);
                console.log("Sách nghệ thuật (lẻ):", artBook);
                break;

            case 2:
                let row = Number(prompt("Nhập số hàng của kệ sách"));
                let cols = Number(prompt("Nhập số cột của kệ sách"));

                if (isNaN(row) || isNaN(cols) || row <= 0 || cols <= 0) {
                    alert("Số hàng và cột phải là số dương!");
                    break;
                }

                for (let i = 0; i < row; i++) {
                    let space = "";
                    for (let j = 0; j < cols; j++) {
                        let position = `[${i}-${j}]`;
                        if (i === j) position += " (Kệ ưu tiên)";
                        space += position + "  ";
                    }
                    console.log(space);
                }
                alert("Đã thiết kế sơ đồ kho thành công!");
                break;

            case 3:
                let nowBook = Number(prompt("Nhập số lượng sách hiện tại:"));
                let costBook = Number(prompt("Nhập phí bảo trì gốc cho 1 cuốn sách:"));
                let year = Number(prompt("Số năm dự toán:"));

                if (isNaN(nowBook) || isNaN(costBook) || isNaN(year)) {
                    alert("Dữ liệu nhập vào phải là số");
                    break;
                }

                console.log("--- Dự toán phí bảo trì sách theo năm ---");
                for (let i = 1; i <= year; i++) {
                    let totalCostBook = costBook * nowBook;
                    console.log(`Năm ${i}: ${totalCostBook.toFixed(0)} VNĐ (Đơn giá: ${costBook.toFixed(0)}/cuốn)`);
                    costBook *= 1.1;
                }
                alert("Đã hoàn thành dự toán");
                break;

            case 4:
                let limitNumber = Number(prompt("Kiểm tra mã sách từ 1 đến bao nhiêu?"));
                if (isNaN(limitNumber) || limitNumber <= 0) {
                    alert("Vui lòng nhập số dương");
                    break;
                }

                let luckyNumber = "";
                let luckyCount = 0;

                console.log("--- Danh sách mã sách may mắn ---");
                for (let i = 1; i <= limitNumber; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        luckyNumber += i + " ";
                        luckyCount++;
                    }
                }

                console.log(luckyNumber || "Không có mã nào thỏa mãn.");
                console.log(`=> Tổng cộng có ${luckyCount} mã may mắn.`);
                alert(`Tìm thấy ${luckyCount} mã may mắn. Xem chi tiết tại Console.`);
                break;

            case 5:
                alert("Thoát chương trình. Tạm biệt!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 5);
}
