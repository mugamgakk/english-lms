import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import printJS from "print-js";

export function createPDF(target, fileName = "download") {
    html2canvas(target).then(function (canvas) {
        // 캔버스를 이미지로 변환
        var imgData = canvas.toDataURL("image/png");

        var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
        var pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
        var margin = 10; // 출력 페이지 여백설정
        var doc = new jsPDF("p", "mm");
        var position = 0;

        // 첫 페이지 출력
        doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // 한 페이지 이상일 경우 루프 돌면서 출력
        while (heightLeft >= 20) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // 파일 저장
        doc.save(`${fileName}.pdf`);
    });
}

export function createPrint(target){
    // printable : 프린트 될 요소;
    // type : 프린트 될 요소 타입;
    // targetStyles : 모든 스타일을 받아 스타일적용
    const options = {
        printable: target,
        type:'html',
        targetStyles : ["*"],
        scanStyles  : false
    }
    printJS(options)
}
