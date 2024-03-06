const allDataLoding = async () => {
  const lodeData = await fetch(
    ' https://openapi.programming-hero.com/api/news/categories'
  );
  const data = await lodeData.json();
  const finalData = data.data.news_category;
  console.log(finalData);

  //---------all button loding --------
  const finalBtan = document.getElementById('finalBtan');
  const allNewsDataloding = document.getElementById('allNewsDataloding');
  finalData.forEach(data => {
    const li = document.createElement('li');
    li.innerHTML = `<li onclick="fetchTheDataId('${data.category_id}')" class="text-xl font-bold ">${data.category_name}</li>`;
    const lis = document.createElement('li');
    lis.innerHTML = `<li onclick="fetchTheDataId('${data.category_id}')" class="text-xl font-bold ">${data.category_name}</li>`;

    allNewsDataloding.appendChild(lis);
    finalBtan.appendChild(li);
  });
};

// click to the show  card section javascript add------
const fetchTheDataId = async id => {
  const categoryId = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await categoryId.json();
  const finalDatas = data.data;
  console.log(finalDatas);
  //-----one buy one data loding---------
  const scardAppedContner = document.getElementById('cardAppedContners');
  scardAppedContner.textContent = '';
  finalDatas.forEach(news => {
    const lodingSpners = document.getElementById('lodingSpners');
    lodingSpners.classList.add('hidden');
    const div = document.createElement('div');
    div.classList = `card card-side bg-base-100 gap-10 shadow-xl p-5 mb-7`;

    div.innerHTML = `  <figure><img src="${news.thumbnail_url}" alt="Movie" />
          </figure>
          <div class="w-[100%] ">
            <div>
              <h2 class="text-2xl font-bold">${news.title}</h2>
              <p class="text-[#949494] mt-3">${news.details.slice(0, 600)}</p>
            </div>
            <div class=" flex justify-between mt-4">
              <div class="flex gap-3">
                <div><img class="h-[50px] w-[50px] rounded-full object-cover object-center " src="${
                  news.author.img
                }" alt=" images"></div>
                <div>
                  <h2 class="font-medium ">${
                    news.author.name || 'is not defind'
                  }</h2>
                  <h2 class="text-[#718797]">${news.author.published_date} </h2>
                </div>

              </div>
              <div class="flex gap-2">
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</p>
                <span>${news.total_view}</span>
              </div>
              <div>
                <span><div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div></span>
              </div>

              <div>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>`;
    scardAppedContner.appendChild(div);
  });
};

//--------search the news ---------------

const clickToSearch = () => {
  const lodingSpners = document.getElementById('lodingSpners');
  lodingSpners.classList.remove('hidden');
  const inputAreys = document.getElementById('inputAreys').value;

  fetchTheDataId(inputAreys);
};

fetchTheDataId('02');
allDataLoding();
