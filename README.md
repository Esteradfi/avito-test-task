# Тестовое задание Авито
**Пришлось стереть историю коммитов, т.к. там можно было найти токен.**

Доказательство, что работа действительно моя:
[![test.png](https://i.postimg.cc/hjB4zJzm/test.png)](https://postimg.cc/4KWRjx14)
## Подготока и запуск проекта

Установка зависимостей:
### `npm install`

Далее требуется вставить токен в [.env файл](./.env):

```
REACT_APP_TOKEN=<Вставьте сюда токен>
```
**!!!Без вставки токена запросы к API будут возвращать ошибку**

Запуск проекта в режиме разработчика:
### `npm run start`

## Примеры запросов
Получение фильмов (с фильтрами или без них):
```
curl --request GET \
     --url 'https://api.kinopoisk.dev/v1.4/movie?page=3&limit=2&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=poster&year=1874-2050&ageRating=6&countries.name=%D0%A1%D0%A8%D0%90&countries.name=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F' \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```
Ответ:
```json
{
  "docs": [
    {
      "id": 645118,
      "name": "Головоломка",
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/fe96f444-f022-4d14-a40f-7c1f35cc6ab8/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/fe96f444-f022-4d14-a40f-7c1f35cc6ab8/x1000"
      },
      "alternativeName": "Inside Out"
    },
    {
      "id": 278522,
      "name": "Хоббит: Нежданное путешествие",
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/0e569ebd-0639-416b-92c5-2afffbd5d089/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/0e569ebd-0639-416b-92c5-2afffbd5d089/x1000"
      },
      "alternativeName": "The Hobbit: An Unexpected Journey"
    }
  ],
  "total": 1742,
  "limit": 2,
  "page": 3,
  "pages": 871
}
```

Получение фильмов по названию:
```
curl --request GET \
     --url 'https://api.kinopoisk.dev/v1.4/movie/search?page=2&limit=1&query=%D0%94%D0%B6%D0%B5%D0%BA' \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```

Ответ:
```json
{
  "docs": [
    {
      "id": 820652,
      "name": "Джек",
      "alternativeName": "Jack",
      "enName": "",
      "type": "movie",
      "year": 2014,
      "description": "Не смотря на то, что ему только десять лет, Джек отвечает не только за себя, но и за своего младшего брата Мануэля, что наполняет самого Джека гордостью. Их мать-одиночка весь день работает, а по ночам часто куда-то уходит. Отца никто никогда не видел и на горизонте. Однажды Мануэль обжигает себя кипящей водой во время купания. За этот несчастный случай винят Джека, что становится достаточным для того, чтобы социальные службы могли его отправить в учреждение подальше от дома. Вскоре мальчик попадает в неприятности, из-за которых сбегает обратно домой. Дома же он обнаруживает, что их мать опять куда-то пропала. Джек и Мануэль начинают своё скитание по городу в поисках матери. Они спят в парках и подземных автомобильных стоянках, убегают от полиции и случайно встречаются со взрослыми, среди которых одни помогают, а другие остаются равнодушными.",
      "shortDescription": "",
      "movieLength": 103,
      "isSeries": false,
      "ticketsOnSale": false,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": null,
      "top10": null,
      "top250": null,
      "typeNumber": 1,
      "status": null,
      "names": [
        {
          "name": "Джек"
        },
        {
          "name": "Jack"
        },
        {
          "name": "Jack (Edward Berger)",
          "language": "FR",
          "type": null
        },
        {
          "name": "男孩杰克",
          "language": "CN",
          "type": null
        }
      ],
      "externalId": {
        "imdb": "tt3469918",
        "tmdb": 254323
      },
      "logo": {
        "url": null
      },
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/091fea8e-10ae-4b75-ad37-edb302e0462e/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/091fea8e-10ae-4b75-ad37-edb302e0462e/x1000"
      },
      "backdrop": {
        "url": "https://image.openmoviedb.com/tmdb-images/original/lv39Kkus0pLLn68tmSVnSX4Tw72.jpg",
        "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/lv39Kkus0pLLn68tmSVnSX4Tw72.jpg"
      },
      "rating": {
        "kp": 6.601,
        "imdb": 7.2,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": null
      },
      "votes": {
        "kp": 231,
        "imdb": 1339,
        "filmCritics": 0,
        "russianFilmCritics": 1,
        "await": 19
      },
      "genres": [
        {
          "name": "драма"
        }
      ],
      "countries": [
        {
          "name": "Германия"
        }
      ],
      "releaseYears": []
    }
  ],
  "total": 1000,
  "limit": 1,
  "page": 2,
  "pages": 1000
}
```

Получение конкретного фильма по его id:
```
curl --request GET \
     --url https://api.kinopoisk.dev/v1.4/movie/5000 \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```

Ответ:
```json
{
  "fees": {
    "world": {
      "value": 39278722,
      "currency": "$"
    },
    "usa": {
      "value": 37672941,
      "currency": "$"
    }
  },
  "status": null,
  "externalId": {
    "imdb": "tt0120703",
    "tmdb": 33644
  },
  "rating": {
    "kp": 6.367,
    "imdb": 5.7,
    "filmCritics": 5.5,
    "russianFilmCritics": 0,
    "await": null
  },
  "votes": {
    "kp": 439,
    "imdb": 8248,
    "filmCritics": 50,
    "russianFilmCritics": 0,
    "await": 0
  },
  "backdrop": {
    "url": "https://image.openmoviedb.com/tmdb-images/original/sW9lF5r5riUk6X1Dgy6xsnVaMSP.jpg",
    "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/sW9lF5r5riUk6X1Dgy6xsnVaMSP.jpg"
  },
  "movieLength": 124,
  "images": {
    "framesCount": 5
  },
  "productionCompanies": [
    {
      "name": "20th Century Fox",
      "url": "https://www.themoviedb.org/t/p/original/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "previewUrl": "https://www.themoviedb.org/t/p/w500/qZCc1lty5FzX30aOCVRBLzaVmcp.png"
    }
  ],
  "spokenLanguages": [
    {
      "name": "English",
      "nameEn": "English"
    }
  ],
  "id": 5000,
  "type": "movie",
  "name": "Увлечения Стеллы",
  "description": "Стелла Пэйн, преуспевающая бизнес-леди, давно забыла, когда в последний раз была в отпуске. Ее лучшая подруга Делайла решает исправить такое ненормальное положение дел. И поддавшись спонтанному порыву, они отправляются на Ямайку к прекрасному голубому морю и белому песку.\n\nРомантической настроение витает здесь в воздухе. И вскоре Стелла знакомится с молодым чернокожим красавцем. Парень - предел всех мечтаний. И Стелла с удивлением понимает, что ее сердце открыто для любви. Единственное, что смущает, - 20-летняя разница в возрасте.",
  "distributors": {
    "distributor": null,
    "distributorRelease": "Двадцатый Век Фокс СНГ"
  },
  "premiere": {
    "world": "1998-08-03T00:00:00.000Z",
    "dvd": "2009-08-27T00:00:00.000Z"
  },
  "slogan": "Sometimes you have to break the rules to free your heart.",
  "year": 1998,
  "budget": {
    "value": 20000000,
    "currency": "$"
  },
  "poster": {
    "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/ae9c9abe-6912-4eec-99b6-7a69590f9252/orig",
    "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/ae9c9abe-6912-4eec-99b6-7a69590f9252/x1000"
  },
  "facts": null,
  "genres": [
    {
      "name": "драма"
    },
    {
      "name": "мелодрама"
    },
    {
      "name": "комедия"
    }
  ],
  "countries": [
    {
      "name": "США"
    }
  ],
  "seasonsInfo": [],
  "persons": [
    {
      "id": 12668,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_12668.jpg",
      "name": "Анджела Бассетт",
      "enName": "Angela Bassett",
      "description": "Stella Payne",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 7090,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_7090.jpg",
      "name": "Тэй Диггз",
      "enName": "Taye Diggs",
      "description": "Winston Shakespeare",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 22266,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_22266.jpg",
      "name": "Вупи Голдберг",
      "enName": "Whoopi Goldberg",
      "description": "Delilah Abraham",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1797,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1797.jpg",
      "name": "Реджина Кинг",
      "enName": "Regina King",
      "description": "Vanessa",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 67934,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67934.jpg",
      "name": "Сьюззанн Дугласс",
      "enName": "Suzzanne Douglas",
      "description": "Angela",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 64513,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_64513.jpg",
      "name": "Майкл Дж. Паган",
      "enName": "Michael J. Pagan",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 67935,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67935.jpg",
      "name": "Сисили Джонсон",
      "enName": "Sicily Johnson",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 67936,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67936.jpg",
      "name": "Ричард Лосон",
      "enName": "Richard Lawson",
      "description": "Jack",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 526,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_526.jpg",
      "name": "Бэрри Шебака Хенли",
      "enName": "Barry Shabaka Henley",
      "description": "Buddy",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 20941,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_20941.jpg",
      "name": "Ли Уивер",
      "enName": "Lee Weaver",
      "description": "Nate",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 111497,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_111497.jpg",
      "name": "Мишель Коломбье",
      "enName": "Michel Colombier",
      "description": null,
      "profession": "композиторы",
      "enProfession": "composer"
    },
    {
      "id": 1998574,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1998574.jpg",
      "name": "Марк Дабе",
      "enName": "Marc Dabe",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 1272581,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1272581.jpg",
      "name": "Рут Е. Картер",
      "enName": "Ruth E. Carter",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 1998655,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1998655.jpg",
      "name": "Джуди Джованни",
      "enName": "Judi Giovanni",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 67932,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67932.jpg",
      "name": "Кевин Родни Салливан",
      "enName": "Kevin Rodney Sullivan",
      "description": null,
      "profession": "режиссеры",
      "enProfession": "director"
    },
    {
      "id": 149825,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_149825.jpg",
      "name": "Джордж Бауэрс",
      "enName": "George Bowers",
      "description": null,
      "profession": "монтажеры",
      "enProfession": "editor"
    },
    {
      "id": 323385,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_323385.jpg",
      "name": "Джеф Джёр",
      "enName": "Jeffrey Jur",
      "description": null,
      "profession": "операторы",
      "enProfession": "operator"
    },
    {
      "id": 30142,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_30142.jpg",
      "name": "Дебора Шиндлер",
      "enName": "Deborah Schindler",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 13093,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_13093.jpg",
      "name": "Роналд Бэсс",
      "enName": "Ron Bass",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 67933,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67933.jpg",
      "name": "Терри МакМиллан",
      "enName": "Terry McMillan",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 67948,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67948.jpg",
      "name": "Дженнифер Огден",
      "enName": "Jennifer Ogden",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 13093,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_13093.jpg",
      "name": "Роналд Бэсс",
      "enName": "Ron Bass",
      "description": null,
      "profession": "редакторы",
      "enProfession": "writer"
    },
    {
      "id": 67933,
      "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_67933.jpg",
      "name": "Терри МакМиллан",
      "enName": "Terry McMillan",
      "description": null,
      "profession": "редакторы",
      "enProfession": "writer"
    }
  ],
  "lists": [],
  "typeNumber": 1,
  "alternativeName": "How Stella Got Her Groove Back",
  "enName": null,
  "names": [
    {
      "name": "Увлечения Стеллы"
    },
    {
      "name": "How Stella Got Her Groove Back"
    },
    {
      "name": "Stella vaihtaa vapaalle",
      "language": "FI",
      "type": null
    },
    {
      "name": "A Nova Paixão de Stella",
      "language": "BR",
      "type": null
    },
    {
      "name": "Cómo Stella recuperó la marcha",
      "language": "ES",
      "type": null
    },
    {
      "name": "När Stella fick tillbaka lusten",
      "language": "SE",
      "type": null
    },
    {
      "name": "Sans complexes",
      "language": "FR",
      "type": null
    },
    {
      "name": "Benvenuta in paradiso",
      "language": "IT",
      "type": null
    },
    {
      "name": "Stella's Groove: Männer sind die halbe Miete",
      "language": "DE",
      "type": null
    }
  ],
  "ageRating": 16,
  "ratingMpaa": "r",
  "updatedAt": "2024-03-21T01:00:20.320Z",
  "shortDescription": null,
  "technology": {
    "hasImax": false,
    "has3D": false
  },
  "ticketsOnSale": false,
  "similarMovies": [],
  "sequelsAndPrequels": [],
  "logo": {
    "url": "https://imagetmdb.com/t/p/original/8m6g1pkjRQf3wop4T6bmwUwnDlk.png"
  },
  "watchability": {
    "items": []
  },
  "top10": null,
  "top250": null,
  "audience": [
    {
      "count": 8031010,
      "country": "США"
    },
    {
      "count": 60205,
      "country": "Великобритания"
    },
    {
      "count": 5321,
      "country": "Италия"
    }
  ],
  "deletedAt": null,
  "isSeries": false,
  "seriesLength": null,
  "totalSeriesLength": null,
  "networks": null,
  "videos": {
    "trailers": [
      {
        "url": "https://www.youtube.com/embed/0eF0BYJM1FY",
        "name": "How Stella Got Her Groove Back (1998) - Theatrical Trailer",
        "site": "youtube",
        "type": "TRAILER"
      },
      {
        "url": "https://www.youtube.com/embed/0eF0BYJM1FY",
        "name": "How Stella Got Her Groove Back (1998) - Theatrical Trailer",
        "site": "youtube",
        "type": "TRAILER"
      }
    ]
  }
}
```

Получение сезонов сериала по его id:
```
curl --request GET \
     --url 'https://api.kinopoisk.dev/v1.4/season?page=1&limit=1&selectFields=airDate&selectFields=enName&selectFields=name&selectFields=number&selectFields=episodes&movieId=685246' \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```

Ответ: 
```json
{
  "docs": [
    {
      "name": "Сезон 10",
      "enName": "Season 10",
      "number": 10,
      "episodes": [
        {
          "number": 1,
          "name": "Эпизод 1",
          "enName": "Episode #10.1",
          "date": null,
          "description": null
        }
      ],
      "airDate": null,
      "id": "655e3ccd2aa4583c9c107979"
    }
  ],
  "total": 11,
  "limit": 1,
  "page": 1,
  "pages": 11
}
```

Получение постеров фильма по его id:
```
curl --request GET \
     --url 'https://api.kinopoisk.dev/v1.4/image?page=1&limit=2&selectFields=url&selectFields=previewUrl&movieId=4374&type=cover' \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```

Ответ: 
```json
{
  "docs": [
    {
      "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/00e1a566-041e-4eb1-8005-970a7963f4e5/orig",
      "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/00e1a566-041e-4eb1-8005-970a7963f4e5/360",
      "id": "632e5dc8aff710671ba87061"
    },
    {
      "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/892a664b-07e1-44e3-918d-5fe606f1cec1/orig",
      "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/892a664b-07e1-44e3-918d-5fe606f1cec1/360",
      "id": "632e5dc8aff710671ba87015"
    }
  ],
  "total": 9,
  "limit": 2,
  "page": 1,
  "pages": 5
}
```

Получение отзывов на фильм по его id:
```
curl --request GET \
     --url 'https://api.kinopoisk.dev/v1.4/review?page=4&limit=2&selectFields=id&selectFields=title&selectFields=author&selectFields=review&selectFields=type&movieId=4374' \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```

Ответ:
```json
{
  "docs": [
    {
      "id": 3155764,
      "author": "StepZogo",
      "review": "Пираты Карибского моря это один из моих любимых фильмов в данном жанре. Его основная особенность в том, что его можно пересматривать из раза в раз и он все равно будет смешным и интересным)\r\n\r\nНачнем с простого это сюжет, нельзя сказать, что он какой то уж прям неожиданный. Джеку Воробью нужен его корабль 'Черная Жемчужина', Кузнецу Тернеру его любовь с детства Елизабет, а Барбоссе не очень хочется отдавать Джеку корабль) А офицеру Норрингтону нужно просто ловить пиратов и попробовать жениться на Елизабет. Ничего сложного в сюжете нет.\r\n\r\nФильм по большей части цепляет другим, а именно образами и харизмой актеров. Джонни Депп проделал огромную работу по созданию Джека Воробья. Идея скопировать образ гитариста Роллинг Стоунз Кита Ричардса была и есть гениальна. Вот у нас и выходит такой рокер-пират-авантюрист. Само поведение это тоже мое уважение, потому что его не копировал только не ленивый...\r\n\r\nЕще меня зацепил мистер Гипс в роли такого знаете Санчо Пансо, преданного оруженосца и Барбосса в роли антагониста прекрасен. Его нельзя назвать злодеем, потому все пираты злодеи и тут как бы странно их разделять... Остальные же образы меня не особо зацепили. Орландо Блум и Кира Найтли смотрятся мило, но их романтическая линия показана как то не очень, маловато их на экране, да и нельзя сказать, что они как то гениально играют...\r\n\r\nДекорации и эффекты для тех лет просто Вау. Сейчас не все так качественно могут делать как тогда. Костюмы, лодки, города и все что вы видите воссоздано на высшем уровне. Прям вот веришь, что это Карибы 18 века, а не какой то павильон... Корабли тоже очень правдоподобно сделаны.\r\n\r\nПо итогу я могу сказать, что фильм к просмотру\\пересмотру обязателен. Ради хороших шуток, ради атмосферы или просто для того, чтобы насладиться стилем Джека Воробья, Барбоссы и других пиратов.",
      "title": "Классика приключенческого кина 21 века",
      "type": "Позитивный"
    },
    {
      "id": 3155022,
      "author": "iskanders-m",
      "review": "Когда твои ожидания от фильма оправдываются целиком и полностью – то есть, ты не разочарован, но и, в общем-то, не прыгаешь от вдохновения, то получается так, что и писать не о чем.\r\n\r\n«Пираты Карибского моря» настолько прочно вписаны в мировую массовую культуру, столько уже о них сказано и написано, что кажется, будто любое твоё слово будет общим местом. Не будет им разве что тот факт, что фильм я посмотрел впервые, спустя 19 лет после его выпуска, да ещё и на фоне будоражащей всех интересующихся светской хроникой судебной тяжбой Джонни Деппа с его бывшей супругой. \r\n\r\nДа, симпатии подавляющего числа людей к Джонни понятны – своими замечательными киноработами (и в одну из главных очередей – этой) и музыкой он завоевал сердца миллионов. Не погрешу против истины, сказав, что Депп – главная звезда «Пиратов» – и не только потому, что он главный герой, но в большей степени потому, что весь фильм он тянет на себе, оставляя позади своих коллег. Соревноваться в мастерстве с ним может разве что харизматичный Джеффри Раш в роли Барбоссы.\r\n\r\nПиратские саги всегда привлекательны – духом героизма, звоном сокрытых в дремучих дебрях монет, некоей сказочностью действа. Не устаревает классический «Остров сокровищ», ореол культа приобрели и «Пираты». Сказочность необходима, ибо без неё и сюжет поблекнет, и такие малосимпатичные фигуры, как пираты, перестанут восприниматься романтичными героями (или забавными простофилями, вроде парочки глазастика и пузана из картины).\r\n\r\nФильм снят зрелищно, эффектно. Актёры в целом сыграли неплохо. Есть и красивые сцены боёв на шпагах, есть и уморительные моменты. Конечно, этот фильм заслуживает внимания и высоких оценок, хотя и не является шедевром (впрочем, едва ли ему и нужен такой статус). И да, очередная благодарность мастерам озвучивания (или, как принято на их «профсленге», озвучания) голоса «подобраны со вкусом».\r\n\r\n8 из 10.",
      "title": "",
      "type": "Нейтральный"
    }
  ],
  "total": 262,
  "limit": 2,
  "page": 4,
  "pages": 131
}
```

Получение списка для фильтров (в данном проекте применяется только для стран):
```
curl --request GET \
     --url 'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name' \
     --header 'X-API-KEY: token' \
     --header 'accept: application/json'
```

Ответ:
```json
[
  {
    "name": "Австралия",
    "slug": "Avstraliya"
  },
  {
    "name": "Австрия",
    "slug": "Avstriya"
  },
  {
    "name": "Азербайджан",
    "slug": "Azerbaydzhan"
  },
  ...
]
```