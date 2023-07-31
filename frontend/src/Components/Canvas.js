import React from 'react'
import {useDrawConfiguration, useOnDraw} from './Hooks'
import {useRef} from 'react'


const Canvas = ({
  width,
  height
}) => {
  
  const {
    onMouseDown,
    setCanvasRef
  } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, '#ffffff', 5);
  }

  function drawLine(
    start,
    end,
    ctx,
    color,
    width
  ) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <canvas
        width={width}
        height={height}
        onMouseDown={onMouseDown}
        style={canvasStyle}
        ref={setCanvasRef}
    />
  )
}

export const ConfigurationCanvas = ({
  width,
  height,
  betavis,
  betair,
  lamdavis,
  lamdair
}) => {
  
  const setCanvasRef = useDrawConfiguration(drawConfiguration, betavis, betair, lamdavis, lamdair);

  function drawConfiguration(beta1, beta2, lamda1, lamda2, ctx) {
    var w = width;
    var h = height;
    var lamda = lamda1 * lamda2 / (lamda1 + lamda2);
    var beta = Math.asin(lamda * (Math.sin(beta1 * Math.PI / 180) / lamda1 + Math.sin(beta2 * Math.PI / 180) / lamda2)) * 180 / Math.PI
    var beta1x = h / 2 * (1 - Math.sin(beta1 * Math.PI / 180));
    var beta1y = h / 2 * (1 - Math.cos(beta1 * Math.PI / 180));
    
    var betaName1x = h * (1 / 2 - Math.sin(beta1 / 2 * Math.PI / 180) / 5);
    var betaName1y = h * (1 / 2 - Math.cos(beta1 / 2 * Math.PI / 180) / 5);
    
    var beta2x = h / 2 * (1 - Math.sin(beta2 * Math.PI / 180));
    var beta2y = h / 2 * (1 - Math.cos(beta2 * Math.PI / 180));
    var betaName2x = h * (1 / 2 - Math.sin(beta2 / 2 * Math.PI / 180) / 9);
    var betaName2y = h * (1 / 2 - Math.cos(beta2 / 2 * Math.PI / 180) / 9);
  
    var betax = h / 2 * (1 + Math.sin(beta * Math.PI / 180));
    var betay = h / 2 * (1 - Math.cos(beta * Math.PI / 180));
    var betaNamex = h * (1 / 2 + Math.sin(beta / 2 * Math.PI / 180) / 7);
    var betaNamey = h * (1 / 2 - Math.cos(beta / 2 * Math.PI / 180) / 7);
  

    ctx.clearRect(0, 0, w, h);

    drawLineArrow(0, h / 2, w, h / 2, 1, "#000000");
    drawLineArrow(w / 2, h, w / 2, 0, 1, "#000000");

    drawLineArrow(beta1x, beta1y, w / 2, h / 2, 0.5, "#00ff00");
    drawArcArrow(w / 2, h / 2, h / 5, 3 / 2 * Math.PI, (270 - beta1) * Math.PI / 180, true, "#00ff00");
    drawText(betaName1x, betaName1y, "\u03b2", "VIS", 5, 0, "#00ff00");
    // drawText(betaName1x, betaName1y + 1, "="+beta1+"\u00b0", "", 0, 2, "#00ff00");
    
    drawLineArrow(beta2x, beta2y, w / 2, h / 2, 0.5, "#ff0000");
    drawArcArrow(w / 2, h / 2, h / 9, 3 / 2 * Math.PI, (270 - beta2) * Math.PI / 180, true, "#ff0000");
    drawText(betaName2x, betaName2y, "\u03b2", "IR", 5, 0, "#ff0000");
    
    drawLineArrow(w / 2, h / 2, betax, betay, 0.5, "#0000ff");
    drawArcArrow(w / 2, h / 2, h / 7, 3 / 2 * Math.PI, (270 + beta) * Math.PI / 180, false, "#0000ff");
    drawText(betaNamex, betaNamey, "\u03b2", "SFG", 5, 0, "#0000ff");

    // drawArcArrow(w / 2, h / 2, h / 7, Math.PI / 2, (90 - gamma) * Math.PI / 180, true, "#00ffff");

    drawText(w - 50, h / 2 - 30, "\u2160", "", 0, 0, "#000000");
    drawText(w - 50, h / 2 + 50, "\u2161", "", 0, 0, "#000000");

    function drawLineArrow(fromX, fromY, toX, toY, arrowPos, color) {
      var headlen = 10;//自定义箭头线的长度
      var theta = 30;//自定义箭头线与直线的夹角
      var arrowX, arrowY;//箭头线终点坐标
      // 计算各角度和对应的箭头终点坐标
      var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
      var angle1 = ((angle + theta) % 360) * Math.PI / 180;
      var angle2 = ((angle - theta) % 360) * Math.PI / 180;
      var topX = headlen * Math.cos(angle1);
      var topY = headlen * Math.sin(angle1);
      var botX = headlen * Math.cos(angle2);
      var botY = headlen * Math.sin(angle2);
      ctx.beginPath();
      //画直线
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX , toY);
    
      arrowX = toX + topX - (toX - fromX) * (1 - arrowPos);
      arrowY = toY + topY - (toY - fromY) * (1 - arrowPos);
      //画上边箭头线
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(toX - (toX - fromX) * (1 - arrowPos), toY- (toY - fromY) * (1 - arrowPos));
    
      arrowX = toX + botX - (toX - fromX) * (1 - arrowPos);
      arrowY = toY + botY - (toY - fromY) * (1 - arrowPos);
      //画下边箭头线
      ctx.lineTo(arrowX, arrowY);
      
      ctx.strokeStyle = color;
      ctx.stroke();
    }
    
    function drawArcArrow(x, y, radius, startAngle, endAngle, anticlockwise, color) {
      var headlen = 10;//自定义箭头线的长度
      var theta = 30;//自定义箭头线与直线的夹角
      var arrowX, arrowY;//箭头线终点坐标
      // 计算各角度和对应的箭头终点坐标
      var angle = 90 + endAngle * 180 / Math.PI;
      var angle1 = (angle + theta) * Math.PI / 180;
      var angle2 = (angle - theta) * Math.PI / 180;
      var topX = (anticlockwise ? 1 : -1) * headlen * Math.cos(angle1);
      var topY = (anticlockwise ? 1 : -1) * headlen * Math.sin(angle1);
      var botX = (anticlockwise ? 1 : -1) * headlen * Math.cos(angle2);
      var botY = (anticlockwise ? 1 : -1) * headlen * Math.sin(angle2);
      ctx.beginPath();
      //画弧线
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      var toX = x + radius * Math.cos(endAngle);
      var toY = y + radius * Math.sin(endAngle);
    
      arrowX = toX + topX;
      arrowY = toY + topY;
      //画上边箭头线
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(toX, toY);
    
      arrowX = toX + botX;
      arrowY = toY + botY;
      //画下边箭头线
      ctx.lineTo(arrowX, arrowY);
      
      ctx.strokeStyle = color;
      ctx.stroke();
    }
    
    function drawText(x, y, text, subtext, subtextShiftx, subtextShifty,color) {
      ctx.fillStyle = color;
      ctx.textBaseline = "bottom";
      ctx.textAlign = "center";
      ctx.font = "24px serif";
      ctx.fillText(text, x, y);
      ctx.textAlign = "left";
      ctx.font = "12px serif";
      ctx.fillText(subtext, x + subtextShiftx, y + subtextShifty);
    }
  }

  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      ref={setCanvasRef}
    />
  )
}

export default Canvas

const canvasStyle = {
    border: "1px solid white"
}

// const configurationCanvasStyle = {
//   backgroud-color: white
// }
