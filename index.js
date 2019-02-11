const DATA = [
  {
    question: 'I find difficult to introduce myself to others.',
    choose: 'MBTI.choose_E_or_I()'
  },
  {
    question:
      'I often busy with your own mind and make you tend to ignore or forget about your surroundings',
    choose: 'MBTI.choose_S_or_N()'
  },
  {
    question: 'I prefer to make logical judgments than value judgments',
    choose: 'MBTI.choose_T_or_F()'
  },
  {
    question: 'I always plan specifically what I will do tomorrow',
    choose: 'MBTI.choose_J_or_P()'
  }
]

const MBTI = {
  displayQuestions: () => {
    const $questionsDOM = document.getElementById('questions')

    DATA.forEach((item, index) => {
      const div = document.createElement('div')

      const category = `
<div class="labels">
  ${item.question}
</div>
<div>
  <label>Agree</label>
  <input type="radio" name="category${index + 1}" onclick="${item.choose}" />
  <input type="radio" name="category${index + 1}" onclick="${item.choose}" />
  <label>Disagree</label>
</div>
`

      div.innerHTML = category
      $questionsDOM.appendChild(div)
    })
  },

  choose_E_or_I: () => {
    const extrovert = document.getElementsByName('category1')
    const introvert = document.getElementsByName('category1')

    if (extrovert[0].checked == true) {
      return 'E'
    } else if (introvert[1].checked == true) {
      return 'I'
    }
  },

  choose_S_or_N: () => {
    const sensing = document.getElementsByName('category2')
    const intuition = document.getElementsByName('category2')

    if (sensing[0].checked == true) {
      return 'S'
    } else if (intuition[1].checked == true) {
      return 'N'
    }
  },

  choose_T_or_F: () => {
    const thinking = document.getElementsByName('category3')
    const feeling = document.getElementsByName('category3')

    if (thinking[0].checked == true) {
      return 'T'
    } else if (feeling[1].checked == true) {
      return 'F'
    }
  },

  choose_J_or_P: () => {
    const judging = document.getElementsByName('category4')
    const perceiving = document.getElementsByName('category4')

    if (judging[0].checked == true) {
      return 'J'
    } else if (perceiving[1].checked == true) {
      return 'P'
    }
  },

  resultMBTI: () => {
    event.preventDefault()

    if (
      MBTI.choose_E_or_I() === undefined ||
      MBTI.choose_S_or_N() === undefined ||
      MBTI.choose_T_or_F() === undefined ||
      MBTI.choose_J_or_P() === undefined
    ) {
      alert('All question must be answered')
    } else {
      alert(
        `Your personality type is ${MBTI.choose_E_or_I()} ${MBTI.choose_S_or_N()} ${MBTI.choose_T_or_F()} ${MBTI.choose_J_or_P()}`
      )
    }
  }
}

MBTI.displayQuestions()
