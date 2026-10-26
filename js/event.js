document.addEventListener("DOMContentLoaded", () => {

    const currentPoint =
        document.getElementById("current-point");

    const targetPoint =
        document.getElementById("target-point");

    const averagePoint =
        document.getElementById("average-point");

    const runsPerHour =
        document.getElementById("runs-per-hour");

    const crystalPerRun =
        document.getElementById("crystal-per-run");

    const calculateButton =
        document.getElementById("calculate-button");

    const eventResult =
        document.getElementById("event-result");

    const remainingPoint =
        document.getElementById("remaining-point");

    const requiredRuns =
        document.getElementById("required-runs");

    const pointsPerHour =
        document.getElementById("points-per-hour");

    const remainingTime =
        document.getElementById("remaining-time");

    const requiredCrystals =
        document.getElementById("required-crystals");

    [currentPoint, targetPoint, averagePoint].forEach(input => {

    input.addEventListener("input", () => {

        const value =
            input.value.replace(/,/g, "");

        if (value === "") {
            return;
        }

        if (!/^\d+$/.test(value)) {
            input.value = value.replace(/\D/g, "");
            return;
        }

        input.value =
            Number(value).toLocaleString();

        });

    });


    calculateButton.addEventListener("click", () => {

        const current =
            Number(currentPoint.value.replace(/,/g, ""));

        const target =
            Number(targetPoint.value.replace(/,/g, ""));

        const average =
            Number(averagePoint.value.replace(/,/g, ""));

        const runs =
            Number(runsPerHour.value);

        const energy =
            Number(crystalPerRun.value);


        // 未入力チェック
        if (
            !currentPoint.value.trim() ||
            !targetPoint.value.trim() ||
            !averagePoint.value.trim() ||
            !runsPerHour.value.trim() ||
            !crystalPerRun.value.trim()
        ) {
            alert("必要な項目をすべて入力してください。");
            return;
        }
        
        // 数値チェック
        const inputs = [current, target, average, runs, energy];
        
        if (inputs.some(value => !Number.isFinite(value))) {
            alert("正しい数値を入力してください。");
            return;
        }
        
        // 負の数をチェック
        if (inputs.some(value => value < 0)) {
            alert("0以上の数値を入力してください。");
            return;
        }
        
        // 平均獲得Pと周回数は0より大きくする
        if (average <= 0 || runs <= 0) {
            alert("平均獲得Pと1時間あたりの周回数は0より大きい値を入力してください。");
            return;
        }
        
        // 目標Pは現在Pより大きくする
        if (target <= current) {
            alert("目標イベントPは、現在のイベントPより大きくしてください。");
            return;
        }



        // 残りイベントP
        const remaining =
            target - current;


        // 必要周回数
        const runCount =
            Math.ceil(remaining / average);


        // 1時間あたりのイベントP
        const hourPoint =
            average * runs;


        // 残り時間（時間）
        const time =
            remaining / hourPoint;


        // 炊き数 × 10 = クリスタル
        const crystal =
            runCount * energy * 10;


        // 結果表示
        remainingPoint.textContent =
            `${remaining.toLocaleString()} P`;

        requiredRuns.textContent =
            `約 ${runCount.toLocaleString()} 回`;

        pointsPerHour.textContent =
            `約 ${hourPoint.toLocaleString()} P / h`;


        // 時間を「○時間○分」に変換
        const hours =
            Math.floor(time);

        const minutes =
            Math.ceil((time - hours) * 60);


        let timeText = "";

        if (hours > 0) {
            timeText += `${hours}時間`;
        }

        if (minutes > 0) {
            timeText += `${minutes}分`;
        }

        if (timeText === "") {
            timeText = "0分";
        }


        remainingTime.textContent =
            timeText;


        requiredCrystals.textContent =
            `${crystal.toLocaleString()} 個`;


        // 結果を表示
        eventResult.classList.add("show");

        eventResult.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
