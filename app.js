// 데이터
const dataMultiArray = [
  // 한국 연상 이미지
  [
    "1위 : 한국 음식<br>2위 : K-POP<br>3위 : 한류스타<br>4위 : 한글(한국어)<br>5위 : 드라마",
    "1위 : IT제품/브랜드<br>2위 : K-POP<br>3위 : 드라마<br>4위 : 경제성장<br>5위 : 패션",
    "1위 : K-POP<br>2위 : 한국음식<br>3위 : 드라마<br>4위 : 영화<br>5위 : 태권도",
    "1위 : K-POP<br>2위 : 한국음식<br>3위 : 애니메이션<br>4위 : 자동차<br>5위 : 한국전쟁",
    "1위 : K-POP<br>2위 : 한국음식<br>3위 : 영화<br>4위 : IT제품/브랜드<br>5위 : 애니메이션"
  ],

  // 드라마 인기 요인
  [
    "1위 : 스토리가 짜임새 있고 탄탄해서<br>2위 : 배우의 외모가 매력적이어서<br>3위 : 영상미나 연출력 등의 작품성이 좋아서",
    "1위 : 배우의 연기력이 뛰어나서<br>2위 : 한국 생활/문화를 간접 경험할 수 있어서<br>3위 : 배우의 외모가 매력적이어서",
    "1위 : 다양한 소재 또는 장르를 다뤄서<br>2위 : 배우의 연기력이 뛰어나서<br>3위 : 한국 문화만의 독특함이 녹아 있어서",
    "1위 : 다양한 소재 또는 장르를 다뤄서<br>2위 : 스토리가 짜임새 있고 탄탄해서<br>3위 : 선호하는 스타가 출연해서",
    "1위 : 다양한 소재 또는 장르를 다뤄서<br>2위 : 스토리가 짜임새 있고 탄탄해서<br>3위 : 한국 생활/문화를 간접 경험할 수 있어서"
  ],

  // 음악 인기 요인
  [
    "1위 : K-POP 가수/그룹의 퍼포먼스가 뛰어나서<br>2위 : K-POP 가수/그룹의 외모나 스타일이 매력적이어서<br>3위 : 음악의 후렴구와 리듬 등이 중독성이 강해서",
    "1위 : 배우의 연기력이 뛰어나서<br>2위 : 한국 생활/문화를 간접 경험할 수 있어서<br>3위 : 배우의 외모가 매력적이어서",
    "1위 : 음악의 후렴구와 리듬 등이 중독성이 강해서<br>2위 : 한국어의 독특한 발음으로 된 가사 때문에<br>3위 : K-POP 가수/그룹의 외모나 스타일이 매력적이어서",
    "1위 : 음악의 후렴구와 리듬 등이 중독성이 강해서<br>2위 : 한국의 최신 패션/뷰티 등 트렌드를 볼 수 있어서<br>3위 : K-POP 가수/그룹의 퍼포먼스가 뛰어나서",
    "1위 : 음악의 후렴구와 리듬 등이 중독성이 강해서<br>2위 : K-POP 가수/그룹의 퍼포먼스가 뛰어나서<br>3위 : K-POP 가수/그룹의 외모나 스타일이 매력적이어서"
  ],

  // 음식 인기 요인
  [
    "1위 : 맛이 있어서<br>2위 : 가성비가 좋아서<br>3위 : 좋아하는 인플루언서가 자주 먹거나 노출해서",
    "1위 : 맛이 있어서<br>2위 : 한국 문화 콘텐츠 속 한식 및 식문화 경험 가능<br>3위 : 건강에 좋은 식재료나 조리법을 사용해서",
    "1위 : 맛이 있어서<br>2위 : 건강에 좋은 식재료나 조리법을 사용해서<br>3위 : 가성비가 좋아서",
    "1위 : 맛이 있어서<br>2위 : 한국 문화 콘텐츠 속 한식 및 식문화 경험 가능<br>3위 : 가성비가 좋아서",
    "1위 : 맛이 있어서<br>2위 : 건강에 좋은 식재료나 조리법을 사용해서<br>3위 : 한국 문화 콘텐츠 속 한식 및 식문화 경험 가능"
  ],

  // 최선호 한국 문화 콘텐츠
  [
    "드라마 : 겨울연가<br>영화 : 기생충<br>가수 / 그룹 : BTS",
    "드라마 : 오징어 게임<br>영화 : 부산행<br>가수 / 그룹 : BTS",
    "드라마 : 오징어 게임<br>영화 : 기생충<br>가수 / 그룹 : BTS",
    "드라마 : 오징어 게임<br>영화 : 기생충<br>가수 / 그룹 : BTS",
    "드라마 : 오징어 게임<br>영화 : 기생충<br>가수 / 그룹 : BTS",
  ]
];

// 섹션별 객체
const section3 = {
  countries : document.querySelector(".sec3_countries").children,
  data : document.querySelector("#data_sec3"),
  setCountryButton : function setCountryButton() {
    for (let i = 0; i < this.countries.length; i++) {
      this.countries.item(i).addEventListener('click', () => {
        if (this.countries.item(i).classList.contains('btn_active') == false) {
          this.countries.item(i).classList.add('btn_active');
          this.countries.item(i).classList.remove('btn_inactive');
  
          for (let j = 0; j < this.countries.length; j++) {
            if (j != i) {
              this.countries.item(j).classList.add('btn_inactive');
              this.countries.item(j).classList.remove('btn_active');
            }
          }
  
          this.data.style.color = "rgba(255, 255, 255, 0)";
          this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 0)";
            setTimeout(() => {
              this.data.innerHTML = dataMultiArray[0][i];
              this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 1)";
              this.data.style.color = "rgba(255, 255, 255, 1)";
            }, 500);
        }
      });
    }
  }
}

const section4 = {
  countries : document.querySelector(".sec4_countries").children,
  data : document.querySelector("#data_sec4"),
  setCountryButton : function setCountryButton() {
    for (let i = 0; i < this.countries.length; i++) {
      this.countries.item(i).addEventListener('click', () => {
        if (this.countries.item(i).classList.contains('btn_active') == false) {
          this.countries.item(i).classList.add('btn_active');
          this.countries.item(i).classList.remove('btn_inactive');
  
          for (let j = 0; j < this.countries.length; j++) {
            if (j != i) {
              this.countries.item(j).classList.add('btn_inactive');
              this.countries.item(j).classList.remove('btn_active');
            }
          }
  
          this.data.style.color = "rgba(255, 255, 255, 0)";
          this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 0)";
            setTimeout(() => {
              this.data.innerHTML = dataMultiArray[1][i];
              this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 1)";
              this.data.style.color = "rgba(255, 255, 255, 1)";
            }, 500);
        }
      });
    }
  }
}

const section5 = {
  countries : document.querySelector(".sec5_countries").children,
  data : document.querySelector("#data_sec5"),
  setCountryButton : function setCountryButton() {
    for (let i = 0; i < this.countries.length; i++) {
      this.countries.item(i).addEventListener('click', () => {
        if (this.countries.item(i).classList.contains('btn_active') == false) {
          this.countries.item(i).classList.add('btn_active');
          this.countries.item(i).classList.remove('btn_inactive');
  
          for (let j = 0; j < this.countries.length; j++) {
            if (j != i) {
              this.countries.item(j).classList.add('btn_inactive');
              this.countries.item(j).classList.remove('btn_active');
            }
          }
  
          this.data.style.color = "rgba(255, 255, 255, 0)";
          this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 0)";
            setTimeout(() => {
              this.data.innerHTML = dataMultiArray[2][i];
              this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 1)";
              this.data.style.color = "rgba(255, 255, 255, 1)";
            }, 500);
        }
      });
    }
  }
}

const section6 = {
  countries : document.querySelector(".sec6_countries").children,
  data : document.querySelector("#data_sec6"),
  setCountryButton : function setCountryButton() {
    for (let i = 0; i < this.countries.length; i++) {
      this.countries.item(i).addEventListener('click', () => {
        if (this.countries.item(i).classList.contains('btn_active') == false) {
          this.countries.item(i).classList.add('btn_active');
          this.countries.item(i).classList.remove('btn_inactive');
  
          for (let j = 0; j < this.countries.length; j++) {
            if (j != i) {
              this.countries.item(j).classList.add('btn_inactive');
              this.countries.item(j).classList.remove('btn_active');
            }
          }
  
          this.data.style.color = "rgba(255, 255, 255, 0)";
          this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 0)";
            setTimeout(() => {
              this.data.innerHTML = dataMultiArray[3][i];
              this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 1)";
              this.data.style.color = "rgba(255, 255, 255, 1)";
            }, 500);
        }
      });
    }
  }
}

const section7 = {
  countries : document.querySelector(".sec7_countries").children,
  data : document.querySelector("#data_sec7"),
  setCountryButton : function setCountryButton() {
    for (let i = 0; i < this.countries.length; i++) {
      this.countries.item(i).addEventListener('click', () => {
        if (this.countries.item(i).classList.contains('btn_active') == false) {
          this.countries.item(i).classList.add('btn_active');
          this.countries.item(i).classList.remove('btn_inactive');
  
          for (let j = 0; j < this.countries.length; j++) {
            if (j != i) {
              this.countries.item(j).classList.add('btn_inactive');
              this.countries.item(j).classList.remove('btn_active');
            }
          }
  
          this.data.style.color = "rgba(255, 255, 255, 0)";
          this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 0)";
            setTimeout(() => {
              this.data.innerHTML = dataMultiArray[4][i];
              this.data.style.borderLeft = "2px solid rgba(255, 255, 255, 1)";
              this.data.style.color = "rgba(255, 255, 255, 1)";
            }, 500);
        }
      });
    }
  }
}


window.onload = () => {
  // 시작 & 새로고침 시 최상단으로
  setTimeout(() => {
    scrollTo(0, 0);
  }, 1);

  
  // 시작 & 새로고침 시 메인 메뉴 선택 처리
  const aTags = document.getElementsByTagName('a');
  aTags.item(0).classList.add('nav_active');
  for (let i = 1; i < aTags.length; i++)
      aTags.item(i).classList.add('nav_inactive');

  // 네비게이션 메뉴 선택 시 OR 스크롤 시 네비게이션 메뉴 변화
  let currentSection = 0;
  window.addEventListener('scroll', (e) => {
    let scrollY = window.scrollY;
    let checkHeight = window.innerHeight;
    if (scrollY < checkHeight * 0.5) currentSection = 0; // 메인 메뉴
    else if (checkHeight * 0.5 <= scrollY && scrollY < checkHeight * 1.5) currentSection = 1; // 한류란?
    else if (checkHeight * 1.5 <= scrollY && scrollY < checkHeight * 2.5) currentSection = 2; // 한국 연상 이미지
    else if (checkHeight * 2.5 <= scrollY && scrollY < checkHeight * 3.5) currentSection = 3; // 한국 드라마 인기요인
    else if (checkHeight * 3.5 <= scrollY && scrollY < checkHeight * 4.5) currentSection = 4; // 한국 음악 인기요인
    else if (checkHeight * 4.5 <= scrollY && scrollY < checkHeight * 5.5) currentSection = 5; // 한국 음식 인기요인
    else if (checkHeight * 5.5 <= scrollY && scrollY < checkHeight * 6.5) currentSection = 6; // 최선호 한국 문화 콘텐츠
    else if (checkHeight * 6.5 <= scrollY && scrollY < checkHeight * 8) currentSection = 7; // 참고 자료

    aTags.item(currentSection).classList.add('nav_active');
    aTags.item(currentSection).classList.remove('nav_inactive');

    for (let i = 0; i < aTags.length; i++) {
      if (i != currentSection) {
        aTags.item(i).classList.remove('nav_active');
        aTags.item(i).classList.add('nav_inactive');
      }
    }
  });

  // 국가 이름 클릭 버튼 처리
  section3.setCountryButton();
  section4.setCountryButton();
  section5.setCountryButton();
  section6.setCountryButton();
  section7.setCountryButton();
}