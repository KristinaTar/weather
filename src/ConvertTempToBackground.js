const firstColor='#00ffff';
const secondColor='#fff700';
const thirdColor='#ff8c00';
const firstTemp = -10;
const secondTemp = 10;
const thirdTemp = 30;

export default function convertTempToBackground (temperature) {
    const firstCol = hexToRgb(firstColor);
    const secondCol = hexToRgb(secondColor);
    const thirdCol = hexToRgb(thirdColor);

    if (temperature<=firstTemp)  return firstColor;
    // eslint-disable-next-line eqeqeq
    if (temperature==secondTemp) return secondColor;
    if (temperature>=thirdTemp)  return thirdColor;

    if (temperature<secondTemp) {
        const r=calculateColor(temperature,firstCol.r,secondCol.r,firstTemp, secondTemp);
        const g=calculateColor(temperature,firstCol.g,secondCol.g,firstTemp, secondTemp);
        const b=calculateColor(temperature,firstCol.b,secondCol.b,firstTemp, secondTemp);
        return `rgb(${r},${g},${b})`;
    }
    if (temperature>secondTemp) {
        const r=calculateColor(temperature,secondCol.r,thirdCol.r,secondTemp, thirdTemp);
        const g=calculateColor(temperature,secondCol.g,thirdCol.g,secondTemp, thirdTemp);
        const b=calculateColor(temperature,secondCol.b,thirdCol.b,secondTemp, thirdTemp);
        return `rgb(${r},${g},${b})`;
    }


        //return `rgb(${firstCol.r},${firstCol.g},${firstCol.b})`

    //return 'rgb(185,185,255)';
}

function calculateColor(t,firstColor,secondColor,t1,t2){
    const k=(secondColor-firstColor)/(t2-t1);
    const a=firstColor-k*t1;
    return k*t+a;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}