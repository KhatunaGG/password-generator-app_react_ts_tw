import { useState } from 'react'
import './App.css'


const allLettersUp: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const allLettersLow: string = 'abcdefghijklmnopqrstuvwxyz'
const allNumbers: string = '0123456789'
const allSymbols: string = '!@#$%^&*()?'



function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [lettersUp, setLettersUp] = useState(false);
  const [letterslow, setLettersLow] = useState(false);
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)


  const generatePassword = () => {

    let allChar = ''

    if (lettersUp) {
      allChar += allLettersUp
    }
    if (letterslow) {
      allChar += allLettersLow
    }
    if (numbers) {
      allChar += allNumbers
    }
    if (symbols) {
      allChar += allSymbols
    }
    let randomPassword = ''

    for (let i = 0; i < length; i++) {
      randomPassword += allChar[Math.round(Math.random() * allChar.length)]
    }

    setPassword(randomPassword)

  }


  return (

    <div className="App">
      <div className=" w-[91.46%] md:w-[540px]">
        <h1 className='text-base text-[#817D92] text-center font-bold mb-4'>Password Generator</h1>
        <div className="flex flex-col gap-4">
          <div className="w-full bg-[#24232C] flex content-between items-center pr-4  md:pr-8">
            <input className="w-[94.80%] border-none outline-none  text-[#E6E5EA] text-2xl font-bold bg-transparent pl-4 pt-[17px] pb-[15px]
               md:text-[32px] md:pl-8" type="text"
              value={password}
            />
            <img
              className='w-[5.10%] h-[20px] md:w-[21px] md:h-[24px]' src="/assets/icon-copy.svg" alt="" />
          </div>
          <div className="output bg-[#24232C] p-4 md:pt-6 md:pr-8 md:pb-8 md:pl-8">
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-row justify-between items-center">
                <h4 className='text-[#E6E5EA] text-base font-bold '>Character Length</h4>
                <div className='text-[32px] font-bold text-[#A4FFAF] leading-[1.32]'>{length}</div>
              </div>
              <input className='bg-[#A4FFAF] w-full' type="range" name="range" id="range" min='1' max='20'
                defaultValue={password.length}
                onChange={(e: any) => setLength(e.target.value)}
              />
            </div>
            <div className="inputwrapper flex flex-col items-start gap-4 ">
              <div className="checkbox___item flex flex-row items-center gap-5 ">
                {lettersUp ? (
                  <img className='w-5 h-5' src='/assets/checked-lg.png'></img>
                ) : (
                  <input className='input__range w-5 h-5 border-none bg-[#A4FFAF]' type="checkbox" name='apper' id='upper'
                    checked={lettersUp}
                    onChange={() => setLettersUp(!lettersUp)}
                  />
                )}
                <label className='label text-base font-bold text-[#E6E5EA] ' htmlFor="">Include Uppercase Letters</label>
              </div>
              <div className="checkbox___item flex flex-row items-center gap-5 ">
                {letterslow ? (
                  <img className='w-5 h-5' src='/assets/checked-lg.png'></img>
                ) : (
                  <input className='input__range w-5 h-5 border-none bg-[#A4FFAF]' type="checkbox" name='lower' id='lower'
                    checked={letterslow}
                    onChange={() => setLettersLow(!letterslow)}
                  />
                )}
                <label className='label text-base font-bold text-[#E6E5EA] ' htmlFor="">Include Lowercase Letters</label>
              </div>
              <div className="checkbox___item flex flex-row items-center gap-5 ">
                {numbers ? (
                  <img className='w-5 h-5' src='/assets/checked-lg.png'></img>
                ) : (
                  <input className='input__range w-5 h-5 border-none bg-[#A4FFAF]' type="checkbox" name='number' id='number'
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                  />
                )}
                <label className='label text-base font-bold text-[#E6E5EA] ' htmlFor="">Include Numbers</label>
              </div>
              <div className="checkbox___item flex flex-row items-center gap-5 ">
                {symbols ? (
                  <img className='w-5 h-5' src='/assets/checked-lg.png'></img>
                ) : (
                  <input className='input__range w-5 h-5 border-none bg-[#A4FFAF]' type="checkbox" name='symbol' id='symbol'
                    checked={symbols}
                    onChange={() => setSymbols(!symbols)}
                  />
                )}
                <label className='label text-base font-bold text-[#E6E5EA] ' htmlFor="">Include Symbols</label>
              </div>
              <div className="strength w-full flex flex-row items-center justify-between  bg-[#18171F]  pl-4 pr-4">
                <h3 className='strength__h3 font-bold text-base leading-[1.32] text-[#817D92] uppercase'>STRENGTH</h3>
                <div className="rate flex flex-row items-center gap-4 pt-3.5 pb-3.5 ">
                  <h3 className="rate-of-strength text-[#E6E5EA] uppercase leading-[1.32] font-bold text-lg">
                    {!password ? '' :
                      length < 6 ? 'TOO WEAK!'
                        : length > 5 && length < 11 ? 'WEAK'
                          : length > 10 && length < 16 ? 'MEDIUM'
                            : length > 15 && length < 21 ? 'STRONG'
                              : ''
                    }
                  </h3>
                  {!password ? (
                    <div className="rate__blocks flex flex-row gap-2 ">
                      <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                      <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                      <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                      <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                    </div>
                  ) :
                    length < 6 ? (
                      <div className="rate__blocks flex flex-row gap-2 ">
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#F64A4A] border-none'></div>
                        <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                        <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                        <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                      </div>

                    ) : length > 5 && length < 11 ? (
                      <div className="rate__blocks flex flex-row gap-2 ">
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#FB7C58] border-none'></div>
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#FB7C58] border-none'></div>
                        <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                        <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                      </div>

                    ) : length > 10 && length < 16 ? (
                      <div className="rate__blocks flex flex-row gap-2 ">
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#F8CD65] border-none'></div>
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#F8CD65] border-none'></div>
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#F8CD65] border-none'></div>
                        <div className='rateblockitem w-2.5 h-7 border border-white'></div>
                      </div>
                    ) : length > 15 && length < 21 ? (
                      <div className="rate__blocks flex flex-row gap-2 ">
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#A4FFAF] border-none'></div>
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#A4FFAF] border-none'></div>
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#A4FFAF] border-none'></div>
                        <div className='rateblockitem w-2.5 h-[29px] bg-[#A4FFAF] border-none'></div>
                      </div>
                    ) : ''
                  }
                </div>
              </div>
              <button
                onClick={generatePassword}
                className='submit w-full bg-[#A4FFAF] border-none outline-none flex flex-row items-center justify-center gap-4 pt-[18px] pb-[17px] pl  hover:yellow-500'>
                <div className="tbn__text text-base font-bold text-[#24232C]">GENERATE</div>
                <img className='arrow w-[11.11] h-3' src="/assets/icon-arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
