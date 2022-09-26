<template>
    <div class="container py-5">
      <NavTabs></NavTabs>

      <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants v-bind:newRestaurant="restaurants"></NewestRestaurants>
        <!-- 最新餐廳 NewestRestaurants -->
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments v-bind:commentRestaurant="comments"></NewestComments>

      </div>
    </div>

    </div>
  </template>

<script>
  import NavTabs from '../components/NavTabs.vue'
  import NewestRestaurants from '../components/NewestRestaurants.vue'
  import NewestComments from '@/components/NewestComments.vue'
  const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Bryon Reilly",
            "tel": "349-995-8133",
            "address": "99012 Morissette Drive",
            "opening_hours": "08:00",
            "description": "cum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.979683404088515",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 2,
            "name": "Itzel Koss",
            "tel": "(541) 027-2423",
            "address": "6922 Yesenia Ports",
            "opening_hours": "08:00",
            "description": "Quasi architecto eum omnis deleniti. Aspernatur et atque dolores odio eligendi quia reiciendis et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.76714763274195",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 3,
            "name": "Davion Ritchie",
            "tel": "548.737.6593 x47686",
            "address": "769 Wolff Loaf",
            "opening_hours": "08:00",
            "description": "Et voluptatibus blanditiis provident possimus a hic veritatis rerum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.11919408830559",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 4,
            "name": "Maci Doyle Sr.",
            "tel": "594-319-6496 x30385",
            "address": "8245 Margaret Viaduct",
            "opening_hours": "08:00",
            "description": "nostrum debitis vero",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.80582393779815",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 5,
            "name": "Ebba Nolan",
            "tel": "187-441-5050",
            "address": "0952 Aliyah Stravenue",
            "opening_hours": "08:00",
            "description": "Voluptatem fugit a officiis perferendis. Esse non dolore voluptas exercitationem. Delectus pariatur impedit deserunt modi. Maiores et in quia veritatis quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.454187593718984",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 6,
            "name": "Anahi Leffler",
            "tel": "1-547-862-4524 x8297",
            "address": "907 Lizzie Drive",
            "opening_hours": "08:00",
            "description": "Rerum occaecati doloremque cumque sit vel voluptas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.04160652912635",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 7,
            "name": "Rowena Bernhard",
            "tel": "980-054-7990 x3820",
            "address": "0549 Runte Mills",
            "opening_hours": "08:00",
            "description": "Omnis et eos enim aut voluptate. Libero nihil earum placeat eius aut. Id quibusdam quam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.30171366345894",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 8,
            "name": "Trace Klocko",
            "tel": "(999) 735-2123",
            "address": "3637 Dibbert Hills",
            "opening_hours": "08:00",
            "description": "Vel aspernatur aspernatur nulla et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.812676165982005",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 9,
            "name": "Dane Treutel",
            "tel": "358-663-9443 x39720",
            "address": "5654 Cristopher Park",
            "opening_hours": "08:00",
            "description": "Asperiores unde voluptate aspernatur molestiae maxime in. Mollitia placeat dolores itaque dolor maxime saepe in fuga. Voluptatibus eos ratione est amet est rerum rerum. Soluta eos blanditiis. Saepe tempora id fugiat autem corporis deleniti autem quisquam repellendus.\n \rNesciunt itaque sapiente dolorem. Qui sed quasi quo et nemo harum. Id maxime ex temporibus impedit qui.\n \rEt beatae corporis possimus distinctio quisquam veritatis. Aut ea esse et est id modi tenetur et at. In commodi vel eum impedit. Quas eaque cumque eum vitae unde autem placeat natus. Eaque itaque voluptatem ea sunt. Totam quia ut cupiditate molestiae deleniti doloribus vitae et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.46996162050449",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        },
        {
            "id": 10,
            "name": "Martine Emmerich",
            "tel": "994-252-9331",
            "address": "6959 Nigel Crest",
            "opening_hours": "08:00",
            "description": "Inventore sint esse nihil doloribus eaque dolorum atque sit nihil. Eum eaque itaque veniam magnam nemo nostrum molestiae similique.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.570570985433065",
            "viewCounts": 0,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            }
        }
    ],
    "comments": [
        {
            "id": 7,
            "text": "Repellendus repellat vero voluptatum eos omnis similique illum.",
            "UserId": 1,
            "RestaurantId": 7,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 7,
                "name": "Rowena Bernhard",
                "tel": "980-054-7990 x3820",
                "address": "0549 Runte Mills",
                "opening_hours": "08:00",
                "description": "Omnis et eos enim aut voluptate. Libero nihil earum placeat eius aut. Id quibusdam quam.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.30171366345894",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 29,
            "text": "Iste dolor sit repellendus sit soluta.",
            "UserId": 1,
            "RestaurantId": 29,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 29,
                "name": "Daphney Balistreri",
                "tel": "151.394.6301 x531",
                "address": "8127 Erdman Canyon",
                "opening_hours": "08:00",
                "description": "Aspernatur debitis qui architecto laudantium dolorem a nobis. Tenetur eaque aut et asperiores fugiat cum illo vel neque. Minus ut excepturi saepe est. Quis aut voluptas.\n \rQui quia ad similique sunt. Provident ullam esse veritatis cupiditate incidunt sint. Velit id esse porro temporibus temporibus harum velit reiciendis. Recusandae voluptates nihil voluptatum. Occaecati tenetur facilis molestiae voluptate et error blanditiis magnam. Asperiores nisi possimus inventore aut labore id et.\n \rOmnis vel optio mollitia. In possimus corrupti. Excepturi reprehenderit eaque ullam nesciunt quaerat omnis omnis et.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.993410366478887",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 52,
            "text": "Voluptas ratione eligendi fugiat iste.",
            "UserId": 1,
            "RestaurantId": 2,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 2,
                "name": "Itzel Koss",
                "tel": "(541) 027-2423",
                "address": "6922 Yesenia Ports",
                "opening_hours": "08:00",
                "description": "Quasi architecto eum omnis deleniti. Aspernatur et atque dolores odio eligendi quia reiciendis et.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.76714763274195",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 73,
            "text": "Aspernatur hic qui adipisci eum.",
            "UserId": 1,
            "RestaurantId": 23,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 23,
                "name": "Kirsten Ziemann",
                "tel": "(319) 004-1155",
                "address": "184 Wiza Islands",
                "opening_hours": "08:00",
                "description": "Distinctio cupiditate excepturi. Repudiandae provident et deserunt nulla quos magni exercitationem sit. Et perferendis ea commodi nemo consequuntur. Aut commodi quia modi soluta recusandae numquam ab omnis. Quia ut rerum nihil facilis dolore iure eaque tenetur.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.90381615881959",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 92,
            "text": "Quia dolor facere sint.",
            "UserId": 1,
            "RestaurantId": 42,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 42,
                "name": "Dr. Reuben Ziemann",
                "tel": "486.163.7339",
                "address": "28637 Mike Roads",
                "opening_hours": "08:00",
                "description": "Dolores molestias rerum. Qui nulla ut eveniet dicta sunt ut. Eveniet qui blanditiis rerum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.72225695745082",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 116,
            "text": "Qui quae ullam enim.",
            "UserId": 1,
            "RestaurantId": 16,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 16,
                "name": "Evelyn Labadie",
                "tel": "(960) 549-3174",
                "address": "2354 Elmo Alley",
                "opening_hours": "08:00",
                "description": "Omnis vel atque. Id labore sunt minima facilis aut exercitationem provident nulla in. Porro ex aut nisi quis at illum quae in recusandae. Autem beatae minima. Saepe esse quod harum voluptate.\n \rInventore natus quaerat possimus accusantium est autem. Laudantium ut quasi. Nobis rerum dolore dolorum delectus.\n \rHarum nam quam omnis aperiam et et. Sit numquam itaque. Quia praesentium quo consequuntur dolores totam quia maiores. Voluptatem et at. In et nihil odio occaecati sunt dolores. Debitis eaque excepturi officiis et velit dolores at cum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.824983296001875",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 148,
            "text": "Totam amet maxime voluptas rerum.",
            "UserId": 1,
            "RestaurantId": 48,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WkMiF01ZVM8PWpAVEGBJj.dsxsN2tq9.3WgdFqXCAqGQNrQ2Pv1MS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 48,
                "name": "Winifred McClure",
                "tel": "206.743.9865 x077",
                "address": "24909 Rosenbaum Wall",
                "opening_hours": "08:00",
                "description": "Nobis quia voluptate modi laboriosam. Aliquam enim animi iure sunt. Ut voluptates hic itaque nemo.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.954292975035976",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 22,
            "text": "Id similique perferendis corporis ut dolorem consequuntur occaecati.",
            "UserId": 2,
            "RestaurantId": 22,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 22,
                "name": "Etha Kautzer",
                "tel": "210.093.9145 x28273",
                "address": "428 Kathryn Valley",
                "opening_hours": "08:00",
                "description": "Unde ex maiores earum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.55607655574828",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 49,
            "text": "Doloribus maxime doloribus harum enim delectus omnis.",
            "UserId": 2,
            "RestaurantId": 49,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 49,
                "name": "Alexandre Hyatt",
                "tel": "(767) 136-9948 x94361",
                "address": "040 Marvin Orchard",
                "opening_hours": "08:00",
                "description": "Unde facilis et voluptatibus veritatis libero. Ab voluptates dolorem voluptas est iste. Quas qui maiores ex. Eum tenetur ipsam quia dolorum. Reiciendis quo dolores esse. Eveniet dicta aut maxime.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.65222919370858",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 68,
            "text": "Voluptas error itaque.",
            "UserId": 2,
            "RestaurantId": 18,
            "createdAt": "2022-09-15T10:01:21.000Z",
            "updatedAt": "2022-09-15T10:01:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$T8Ca.ev.R052kPt.o.QVvummRBPWGEzzL2nt4gOxhLoSaEqBvl7Ge",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z"
            },
            "Restaurant": {
                "id": 18,
                "name": "Dawson Balistreri",
                "tel": "1-457-099-5020 x149",
                "address": "68290 Audrey Pike",
                "opening_hours": "08:00",
                "description": "Est ducimus facilis ea soluta itaque qui. Expedita voluptates nihil error est aperiam occaecati nemo reprehenderit. Eligendi velit quas vel labore in reiciendis in dolores vitae. Consequatur qui quos dolor. Dolorum ea non at hic cum. Incidunt voluptas distinctio excepturi reiciendis voluptatem rerum officiis accusantium cum.\n \rTempora mollitia quia enim. Occaecati eligendi velit non autem omnis illo inventore. Sint accusantium in sed sit veniam.\n \rEst voluptatibus explicabo quaerat alias. Nostrum aliquid optio dolorem quia exercitationem ex. Debitis reiciendis corrupti veritatis natus maxime autem est perspiciatis soluta. Quo rem illum cupiditate vero aliquam consequatur ab.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.06555649969062",
                "viewCounts": 0,
                "createdAt": "2022-09-15T10:01:21.000Z",
                "updatedAt": "2022-09-15T10:01:21.000Z",
                "CategoryId": 2
            }
        }
    ]
  
}
  export default {
   components: {
     NavTabs,
     NewestRestaurants,
     NewestComments
    },
   data () {
    return{
     restaurants:[],
     comments:[]
      }
    },
  created () {
    this.fetchFeeds()
  },
  methods:{
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>