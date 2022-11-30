
export default function Loading() {
  return <>
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}}
    width="calc(24px + 15vw)" 
    height="calc(24px + 15vh)" 
    viewBox="0 0 100 100" 
    preserveAspectRatio="xMidYMid"
    >
  <circle 
    cx="50" 
    cy="50" 
    r="0" 
    fill="none" 
    stroke="#c02a4e" 
    strokeWidth="2"
    >
    <animate 
      attributeName="r" 
      repeatCount="indefinite" 
      dur="1.639344262295082s" 
      values="0;40" keyTimes="0;1" 
      keySplines="0 0.2 0.8 1" 
      calcMode="spline" begin="0s"
      >
    </animate>
    <animate 
      attributeName="opacity" 
      repeatCount="indefinite" 
      dur="1.639344262295082s" 
      values="1;0" keyTimes="0;1" 
      keySplines="0.2 0 0.8 1" 
      calcMode="spline" 
      begin="0s"
      >
    </animate>
  </circle>
  <circle 
    cx="50" 
    cy="50" 
    r="0" 
    fill="none" 
    stroke="#ffa41c" 
    strokeWidth="2"
      >
    <animate 
     attributeName="r"
     repeatCount="indefinite" 
     dur="1.639344262295082s" 
     values="0;40" keyTimes="0;1" 
     keySplines="0 0.2 0.8 1" 
     calcMode="spline" 
     begin="-0.819672131147541s"
      >
    </animate>
    <animate 
      attributeName="opacity" 
      repeatCount="indefinite" 
      dur="1.639344262295082s" 
      values="1;0" 
      keyTimes="0;1" 
      keySplines="0.2 0 0.8 1" 
      calcMode="spline" 
      begin="-0.819672131147541s"
      >
    </animate>
  </circle>
</svg> 
  </>
}