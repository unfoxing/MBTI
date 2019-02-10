const MBTI = {
  choose_E_or_I: () => {
    const extrovert = document.getElementsByName('category1');
    const introvert = document.getElementsByName('category1');

    if (extrovert[0].checked == true) {
      return 'E';
    } else if (introvert[1].checked == true) {
      return 'I';
    }
  },

  choose_S_or_I: () => {
    const sensing = document.getElementsByName('category2');
    const intuition = document.getElementsByName('category2');

    if (sensing[0].checked == true) {
      return 'S';
    } else if (intuition[1].checked == true) {
      return 'N';
    }
  },

  choose_T_or_F: () => {
    const thinking = document.getElementsByName('category3');
    const feeling = document.getElementsByName('category3');

    if (thinking[0].checked == true) {
      return 'T';
    } else if (feeling[1].checked == true) {
      return 'F';
    }
  },

  choose_J_or_P: () => {
    const judging = document.getElementsByName('category4');
    const perceiving = document.getElementsByName('category4');

    if (judging[0].checked == true) {
      return 'J';
    } else if (perceiving[1].checked == true) {
      return 'P';
    }
  },

  resultMBTI: () => {
    if (
      MBTI.choose_E_or_I() === undefined ||
      MBTI.choose_S_or_I() === undefined ||
      MBTI.choose_T_or_F() === undefined ||
      MBTI.choose_J_or_P() === undefined
    ) {
      alert('All question must be answered');
    } else {
      alert(
        `Your personality type is ${MBTI.choose_E_or_I()} ${MBTI.choose_S_or_I()} ${MBTI.choose_T_or_F()} ${MBTI.choose_J_or_P()}`
      );
    }
  }
};
