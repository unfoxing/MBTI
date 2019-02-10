const MBTI = {
  choose_E_or_1: () => {
    ektrovert = document.getElementsByName('category1')

    introvert = document.getElementsByName('category1')

    if (ektrovert[0].checked == true) {
      return 'E'
    } else if (introvert[1].checked == true) {
      return '1'
    }
  },
  choose_S_or_I: () => {
    sensing = document.getElementsByName('category2')

    intuition = document.getElementsByName('category2')

    if (sensing[0].checked == true) {
      return 'S'
    } else if (intuition[1].checked == true) {
      return 'I'
    }
  },
  choose_T_or_F: () => {
    thingking = document.getElementsByName('category3')

    feeling = document.getElementsByName('category3')
    // console.log(introvert[1].checked)
    if (thingking[0].checked == true) {
      return 'T'
    } else if (feeling[1].checked == true) {
      return 'F'
    }
  },
  choose_J_or_P: () => {
    jugding = document.getElementsByName('category4')
    perceiving = document.getElementsByName('category4')

    if (jugding[0].checked == true) {
      return 'J'
    } else if (perceiving[1].checked == true) {
      return 'P'
    }
  },

  resultMBTI: () => {
    if (
      MBTI.choose_E_or_1() === undefined ||
      MBTI.choose_S_or_I() === undefined ||
      MBTI.choose_T_or_F() === undefined ||
      MBTI.choose_J_or_P() === undefined
    ) {
      alert('semua harus di isi')
    } else {
      alert(
        `hasil ${MBTI.choose_E_or_1()} ${MBTI.choose_S_or_I()} ${MBTI.choose_T_or_F()} ${MBTI.choose_J_or_P()}`
      )
    }
  }
}
