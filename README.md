# GameBanana

Async API wrapper for Gamebanana, written for NodeJS.

![https://github.com/SpikeHD/gamebanana](https://img.shields.io/github/package-json/v/SpikeHD/gamebanana) ![https://github.com/SpikeHD/gamebanana](https://img.shields.io/david/SpikeHD/gamebanana) ![https://www.npmjs.com/package/gamebanana](https://img.shields.io/npm/dw/gamebanana)

## Jump to

* [Installation](#installation)
* [Quick-start](#quick-start)
* [Documentation](#documentation)
* [Examples](#examples)
* [Contributing](#contributing)

# Installation

* With `npm`:
  ```sh
  npm install gamebanana
  ```
* With `yarn`:
  ```sh
  yarn add gamebanana
  ```

# Quick-start

Import into your project:
```js
const gb = require('gamebanana')
```

or with ES6 import/exports:
```js
import gb from 'gamebanana'
```

# Documentation

TODO (too lazy rn, just look at JSDocs for now)

# Examples

### Initializing a client

```js
const { Client } = require('gamebanana')

const client = new Client({
  api_key: 'myapikey',
  userid: 'myuserid',
  appid: 'myappid'
})
```

### Initializing an Item

```js
const item = await client.Item.getItem({
  itemtype: 'type',
  itemid: 'id',
  fields: ['fields']
})

// OR with the class directly

const { Item } = require('gamebanana')

const item = new Item({
  itemtype: 'type',
  itemid: 'id',
  fields: ['fields']
})

const data = await item.data()
```

### Initializing a List query

```js
const list = await client.List.list({
  itemtype: 'type',
  field: 'field',
  query: 'searchquery'
})

// OR with the class directly

const { List } = require('gamebanana')

const list = new List({
  itemtype: 'type',
  field: 'field',
  query: 'searchquery'
})

const results = await list.data()
```

### Initializing a Section query

```js
const section = await client.Section.list({
  itemtype: 'type',
  sort: 'sort',
  direction: 'desc',
  page: 1
})

// OR with the class directly

const { Section } = require('gamebanana')

const section = new Section({
  itemtype: 'type',
  sort: 'sort',
  direction: 'desc',
  page: 1
})

const results = await section.data()
```

### Initializing a NewItems submissions query

```js
const submissions = await client.NewItems.getNewItems({
  page: 1
})

// OR with the class directly

const { NewItems } = require('gamebanana')

const submissions = new NewItems({
  page: 1
})

const results = await submissions.data()
```

### Initializing a Member

```js
// Via ID
const member = await client.Member.findByID({
  userid: 1
})

// Via username
const member = await client.Member.findByName({
  username: 'myuser'
})

// OR with the class directly

const { Member } = require('gamebanana')

// With ID
const member = new Member({
  userid: 1
})

// With username
const member = new Member({
  username: 'myuser'
})

const results = await member.find()
```

# Contributing

Issues, PRs, etc. are all welcome!