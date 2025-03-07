import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const jx_el = useRef<HTMLInputElement>(null);
  const tbj_el = useRef<HTMLInputElement>(null);

  const mbj_el = useRef<HTMLInputElement>(null);
  const mrj_el = useRef<HTMLInputElement>(null);
  const syb_el = useRef<HTMLInputElement>(null);
  const sy_el = useRef<HTMLInputElement>(null);
  const mrj2_el = useRef<HTMLInputElement>(null);

  useEffect(() => {
    jx_el.current = document.getElementById('jx') as HTMLInputElement
    tbj_el.current = document.getElementById('tbj') as HTMLInputElement

    mbj_el.current = document.getElementById('mbj') as HTMLInputElement
    mrj_el.current = document.getElementById('mrj') as HTMLInputElement
    syb_el.current = document.getElementById('syb') as HTMLInputElement
    sy_el.current = document.getElementById('sy') as HTMLInputElement
    mrj2_el.current = document.getElementById('mrj2') as HTMLInputElement
    jx_el.current.addEventListener('input', calculate)
    tbj_el.current.addEventListener('input', calculate)
  })
  

  function calculate() {

    if (!jx_el.current || !tbj_el.current) return;
    if (isNaN(jx_el.current.valueAsNumber) || isNaN(tbj_el.current.valueAsNumber)) return;

    const jx = jx_el.current.valueAsNumber;
    const tbj = tbj_el.current.valueAsNumber;

    const mbj = jx * 2 - tbj
    const mrj = jx * 1.03
    const syb = (mbj - mrj) / (mrj - jx)
    const sy = mbj - mrj
    let mrj2 = "N/A"

    if (mbj_el.current) mbj_el.current.value = mbj.toFixed(2).toString()
    if (mrj_el.current) mrj_el.current.value = mrj.toFixed(2).toString()
    if (syb_el.current) syb_el.current.value = syb.toFixed(2).toString()
    if (sy_el.current) sy_el.current.value = sy.toFixed(2).toString()
    if (syb < 15) {
      const mrj_recalc = (jx * 15 + mbj) / 16
      mrj2 = mrj_recalc.toFixed(2).toString()
    }
    if (mrj2_el.current) mrj2_el.current.value = mrj2
  }

  return (
    <div className='App'>
      <div>
        <div className='labels'>
          <div>
            颈线价:
          </div>
          <div>
            头部价:
          </div>
        </div>
        <div className='input_wrapper'>
          <input id='jx' type='number' min={0} ></input>
          <input id='tbj' type='number' min={0} ></input>
        </div>
      </div>
      <div>
        <div className='labels'>
          <div>
            目标价:
          </div>
          <div>
            买入价:
          </div>
          <div>
            收益比:
          </div>
          <div>
            收益:
          </div>
          <div>
            买入价 2:
          </div>
          
        </div>
        <div className='input_wrapper'>
          <input id='mbj' type='string' readOnly></input>
          <input id='mrj' type='string' readOnly></input>
          <input id='syb' type='string' readOnly></input>
          <input id='sy' type='string' readOnly></input>
          <input id='mrj2' type='string' readOnly></input>
        </div>
      </div>
    </div>
  )
}

export default App
