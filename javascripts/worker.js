self.onmessage = e => {
    const data = e.data;

    switch (data.dir) {
        case 'STAT': {
            switch (data.post) {
                case 'LOTTO': {
                    importScripts('//unpkg.com/brain.js');

                    // CRYPTO 기반
                    let cryptoNums;
                    {
                        // 1 ~ 45
                        const lottoNums = Array.from({ length: 45 }, (_, i) => (i + 1));
                        let clone1 = lottoNums.slice();

                        // 섞은 후 랜덤하게 선택
                        for (let i = clone1.length - 1; i > 0; --i) {
                            const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) / (i + 1)));
                            [clone1[i], clone1[j]] = [clone1[j], clone1[i]]; // Swap
                        }

                        cryptoNums = clone1.slice(0, 6).sort((a, b) => a - b);
                    }

                    const net = new brain.NeuralNetwork({ activation: 'sigmoid' });
                    
                    const trainingData = data.payload.lottoData.slice(0, -1).map(data => {
                        const input = Array(45).fill(0);

                        for (let i = 1; i <= 6; ++i) {
                            const num = parseInt(data[`num${i}`], 10);
                            if (num >= 1 && num <= 45) {
                                input[num - 1] = 1;
                            }
                        }

                        return {
                            input,
                            output: Array(45).fill(0).map(() => Math.random())
                        };
                    });

                    net.train(trainingData, {
                        iterations: data.payload.iters,
                    });

                    const input = Array(45).fill(0);
                    // cryptoNums.forEach(num => {
                    //     input[num - 1] = 1;
                    // });
                    input[parseInt(data.payload.lottoData[data.payload.lottoData.length - 1]['num1'], 10) - 1] = 1;
                    input[parseInt(data.payload.lottoData[data.payload.lottoData.length - 1]['num2'], 10) - 1] = 1;
                    input[parseInt(data.payload.lottoData[data.payload.lottoData.length - 1]['num3'], 10) - 1] = 1;
                    input[parseInt(data.payload.lottoData[data.payload.lottoData.length - 1]['num4'], 10) - 1] = 1;
                    input[parseInt(data.payload.lottoData[data.payload.lottoData.length - 1]['num5'], 10) - 1] = 1;
                    input[parseInt(data.payload.lottoData[data.payload.lottoData.length - 1]['num6'], 10) - 1] = 1;

                    const output = net.run(input);
                    self.postMessage({
                        dir: 'STAT',
                        post: 'LOTTO',
                        payload: {
                            cryptoNums: cryptoNums,
                            output: output,
                        }
                    });
                } break;
            }
        } break;
    }
};