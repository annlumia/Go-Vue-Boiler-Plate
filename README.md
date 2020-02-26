# Go & Vue Boiler Plate

Sebelum memulai, mohon install tools yang diperlukan terlebih dahulu:

- [NodeJs](https://nodejs.org/en/download/) v10 atau yang lebih baru
- [Yarn](https://yarnpkg.com/getting-started/install) pakage manager
- Jika ingin mengerjakan bagian backend nya, install [Go](https://golang.org/dl/) V1.13 atau yang lebih baru

Setelah semuanya terinstal, jika ingin mengerjakan bagian frontendnya (vue), jalankan perintah berikut untuk menginstall semua package yang dibutuhkan:

```
$ yarn install
```

## CLI - Command Line Interface

Jika anda hanya mengerjakan bagian frontend/vue saja, anda bisa menjalankannya dengan perintah:

```sh
$ yarn serve
```

Untuk meng-compile frontendnya saja, gunakan perintah:

```sh
$ yarn build:ui
```

Untuk meng-compile backend saja, gunakan perintah:

```sh
$ yarn build:go
```

Untuk meng-compile frontend dan backend secara bersamaan ke dalam mode produksi, perintahnya adalah:

```sh
$ yarn build
```

> Hasil compile akan ada pada folder build.
