document.addEventListener("DOMContentLoaded", () => {

    const value1 =
        document.getElementById("value-1");

    const value2 =
        document.getElementById("value-2");

    const value3 =
        document.getElementById("value-3");

    const value4 =
        document.getElementById("value-4");

    const value5 =
        document.getElementById("value-5");

    const calculateButton =
        document.getElementById("calculate-button");

    const internalResult =
        document.getElementById("internal-result");

    const internalValue =
        document.getElementById("internal-value");

    const effectiveValue =
        document.getElementById("effective-value");


    calculateButton.addEventListener("click", () => {

        const first =
            Number(value1.value);

        const second =
            Number(value2.value);

        const third =
            Number(value3.value);

        const fourth =
            Number(value4.value);

        const fifth =
            Number(value5.value);


        // 未入力チェック
        if (
            !value1.value ||
            !value2.value ||
            !value3.value ||
            !value4.value ||
            !value5.value
        ) {
            alert("1～5枠すべて入力してください。");
            return;
        }


        // 内部値
        const internal =
            first +
            second +
            third +
            fourth +
            fifth;


        // 実効値
        const effective =
            first +
            (second + third + fourth + fifth) * 0.2;


        // 結果表示
        internalValue.textContent =
            internal.toLocaleString();

        effectiveValue.textContent =
            effective.toLocaleString();


        // 結果を表示
        internalResult.classList.add("show");

        internalResult.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});