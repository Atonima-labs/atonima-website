import { useEffect, useRef } from 'react';
type Node = {x:number;y:number;vx:number;vy:number;r:number;hub:boolean};
export default function NetworkCanvas(){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{const c=ref.current;if(!c)return;const ctx=c.getContext('2d');if(!ctx)return;let w=0,h=0,frame=0,nodes:Node[]=[];
 const resize=()=>{const d=Math.min(devicePixelRatio,2);w=c.parentElement?.clientWidth??innerWidth;h=c.parentElement?.clientHeight??innerHeight;c.width=w*d;c.height=h*d;c.style.width=`${w}px`;c.style.height=`${h}px`;ctx.setTransform(d,0,0,d,0,0);if(!nodes.length)nodes=Array.from({length:innerWidth<640?20:40},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*2+1.5,hub:Math.random()>.72}))};
 const draw=()=>{ctx.clearRect(0,0,w,h);nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1});for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<150){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(99,102,241,${(1-d/150)*.24})`;ctx.stroke()}}nodes.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=n.hub?'rgba(99,102,241,.8)':'rgba(45,212,191,.7)';ctx.fill()});frame=requestAnimationFrame(draw)};
 resize();addEventListener('resize',resize);draw();return()=>{removeEventListener('resize',resize);cancelAnimationFrame(frame)}},[]);
 return <canvas ref={ref} className="pointer-events-none absolute inset-0" aria-hidden="true"/>;
}
