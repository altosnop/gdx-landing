const getPositionStyles = (id: number) => {
  switch (id) {
    case 1:
      return 'top-[41px] left-[50%]'
    case 2:
      return 'top-[158px] right-[5%]'
    case 3:
      return 'top-[328px] left-[8%]'
    case 4:
      return 'top-[224px] left-[17%]'
    case 5:
      return 'top-[374px] left-[29%]'
    case 6:
      return 'top-[547px] right-[20%]'
    case 7:
      return 'top-[562px] left-[5%]'
    case 8:
      return 'top-[253px] right-[-5%]'
    case 9:
      return 'top-[216px] left-[40%]'
    case 10:
      return 'top-[444px] left-[25%]'
    case 11:
      return 'top-[496px] right-[-5%]'
    case 12:
      return 'top-[392px] right-[17%]'
    case 13:
      return 'top-[106px] left-[20%]'
    case 14:
      return 'top-[430px] left-[-3%]'
    case 15:
      return 'top-[51px] right-[6%]'
    case 16:
      return 'top-[23px] left-[12%]'
    case 17:
      return 'top-[175px] left-[-5%]'
    default:
      return ''
  }
}

export default getPositionStyles
