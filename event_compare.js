document.addEventListener("DOMContentLoaded", () => {

    const power1 =
        document.getElementById("power-1");

    const bonus1 =
        document.getElementById("bonus-1");

    const power2 =
        document.getElementById("power-2");

    const bonus2 =
        document.getElementById("bonus-2");

    const compareButton =
        document.getElementById("compare-button");

    const compareResult =
        document.getElementById("compare-result");

    const result1 =
        document.getElementById("result-1");

    const result2 =
        document.getElementById("result-2");

    const resultMessage =
        document.getElementById("result-message");


    // 総合力にカンマを付ける
    [power1, power2].forEach(input => {

        input.addEventListener("input", () => {

            const value =
                input.value.replace(/,/g, "");

            if (value === "") {
                return;
            }

            if (!/^\d+$/.test(value)) {
                input.value =
                    value.replace(/\D/g, "");

                return;
            }

            input.value =
                Number(value).toLocaleString();

        });

    });


    compareButton.addEventListener("click", () => {

        const valuePower1 =
            Number(power1.value.replace(/,/g, ""));

        const valueBonus1 =
            Number(bonus1.value);

        const valuePower2 =
            Number(power2.value.replace(/,/g, ""));

        const valueBonus2 =
            Number(bonus2.value);


        // 未入力チェック
        if (
            !power1.value ||
            !bonus1.value ||
            !power2.value ||
            !bonus2.value
        ) {
            alert("必要な項目を入力してください。");
            return;
        }


        // 総合力が同じ場合
        if (valuePower1 === valuePower2) {

            if (valueBonus1 > valueBonus2) {

                resultMessage.textContent =
                    "イベントボーナスの高い編成①をおすすめします。";

            } else if (valueBonus2 > valueBonus1) {

                resultMessage.textContent =
                    "イベントボーナスの高い編成②をおすすめします。";

            } else {

                resultMessage.textContent =
                    "総合力とイベントボーナスが同じです。";

            }

            result1.textContent =
                "総合力・ボーナス";

            result2.textContent =
                "総合力・ボーナス";

            compareResult.classList.add("show");

            compareResult.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            return;
        }


        // 総合力が高い編成を判定
        let highPower;
        let lowPower;
        let highBonus;
        let lowBonus;
        let highTeam;


        if (valuePower1 > valuePower2) {

            highPower = valuePower1;
            lowPower = valuePower2;

            highBonus = valueBonus1;
            lowBonus = valueBonus2;

            highTeam = "①";

        } else {

            highPower = valuePower2;
            lowPower = valuePower1;

            highBonus = valueBonus2;
            lowBonus = valueBonus1;

            highTeam = "②";

        }


        // 総合力の差
        const difference =
            highPower - lowPower;


        // 総合力の差をイベントボーナスへ変換
        // 総合力10,000 = イベントボーナス10%
        const bonusConversion =
            difference / 10000 * 10;


        // 総合力が高い編成のイベントボーナスに加える
        const convertedBonus =
            highBonus + bonusConversion;


        // 判断
        if (convertedBonus > lowBonus) {

            resultMessage.textContent =
                `総合力の高い編成${highTeam}をおすすめします。`;

        } else if (convertedBonus < lowBonus) {

            const lowTeam =
                highTeam === "①" ? "②" : "①";

            resultMessage.textContent =
                `イベントボーナスの高い編成${lowTeam}をおすすめします。`;

        } else {

            resultMessage.textContent =
                "どちらの編成も同等です。";

        }


        // 入力した編成の情報だけ表示
        result1.textContent =
            `${valuePower1.toLocaleString()} / ${valueBonus1}%`;

        result2.textContent =
            `${valuePower2.toLocaleString()} / ${valueBonus2}%`;


        // 結果表示
        compareResult.classList.add("show");

        compareResult.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});