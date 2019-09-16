# Sass API

| Mark | Description                                                |
| ---- | ---------------------------------------------------------- |
| ✅   | Public functions, mixins, placeholders, and variables      |
| ❌   | Private items - not supported outside package's build      |
| ⚠️   | Deprecated items - may not be available in future releases |

<!-- toc -->

- [@carbon/colors](#carboncolors)
  - [✅⚠️ibm--colors [mixin]](#ibm--colors-mixin)
  - [✅carbon--colors [mixin]](#carbon--colors-mixin)

<!-- tocstop -->

## @carbon/colors

### ✅⚠️ibm--colors [mixin]

Define color variables

<details>
<summary>Source code</summary>

```scss
@mixin ibm--colors() {
  $ibm-color__black-100: #000000 !default !global;
  $ibm-color__blue-10: #edf5ff !default !global;
  $ibm-color__blue-20: #d0e2ff !default !global;
  $ibm-color__blue-30: #a6c8ff !default !global;
  $ibm-color__blue-40: #78a9ff !default !global;
  $ibm-color__blue-50: #4589ff !default !global;
  $ibm-color__blue-60: #0f62fe !default !global;
  $ibm-color__blue-70: #0043ce !default !global;
  $ibm-color__blue-80: #002d9c !default !global;
  $ibm-color__blue-90: #001d6c !default !global;
  $ibm-color__blue-100: #001141 !default !global;
  $ibm-color__cool-gray-10: #f2f4f8 !default !global;
  $ibm-color__cool-gray-20: #dde1e6 !default !global;
  $ibm-color__cool-gray-30: #c1c7cd !default !global;
  $ibm-color__cool-gray-40: #a2a9b0 !default !global;
  $ibm-color__cool-gray-50: #878d96 !default !global;
  $ibm-color__cool-gray-60: #697077 !default !global;
  $ibm-color__cool-gray-70: #4d5358 !default !global;
  $ibm-color__cool-gray-80: #343a3f !default !global;
  $ibm-color__cool-gray-90: #21272a !default !global;
  $ibm-color__cool-gray-100: #121619 !default !global;
  $ibm-color__cyan-10: #e5f6ff !default !global;
  $ibm-color__cyan-20: #bae6ff !default !global;
  $ibm-color__cyan-30: #82cfff !default !global;
  $ibm-color__cyan-40: #33b1ff !default !global;
  $ibm-color__cyan-50: #1192e8 !default !global;
  $ibm-color__cyan-60: #0072c3 !default !global;
  $ibm-color__cyan-70: #00539a !default !global;
  $ibm-color__cyan-80: #003a6d !default !global;
  $ibm-color__cyan-90: #012749 !default !global;
  $ibm-color__cyan-100: #061727 !default !global;
  $ibm-color__gray-10: #f4f4f4 !default !global;
  $ibm-color__gray-20: #e0e0e0 !default !global;
  $ibm-color__gray-30: #c6c6c6 !default !global;
  $ibm-color__gray-40: #a8a8a8 !default !global;
  $ibm-color__gray-50: #8d8d8d !default !global;
  $ibm-color__gray-60: #6f6f6f !default !global;
  $ibm-color__gray-70: #525252 !default !global;
  $ibm-color__gray-80: #393939 !default !global;
  $ibm-color__gray-90: #262626 !default !global;
  $ibm-color__gray-100: #161616 !default !global;
  $ibm-color__green-10: #defbe6 !default !global;
  $ibm-color__green-20: #a7f0ba !default !global;
  $ibm-color__green-30: #6fdc8c !default !global;
  $ibm-color__green-40: #42be65 !default !global;
  $ibm-color__green-50: #24a148 !default !global;
  $ibm-color__green-60: #198038 !default !global;
  $ibm-color__green-70: #0e6027 !default !global;
  $ibm-color__green-80: #044317 !default !global;
  $ibm-color__green-90: #022d0d !default !global;
  $ibm-color__green-100: #071908 !default !global;
  $ibm-color__magenta-10: #fff0f7 !default !global;
  $ibm-color__magenta-20: #ffd6e8 !default !global;
  $ibm-color__magenta-30: #ffafd2 !default !global;
  $ibm-color__magenta-40: #ff7eb6 !default !global;
  $ibm-color__magenta-50: #ee5396 !default !global;
  $ibm-color__magenta-60: #d12771 !default !global;
  $ibm-color__magenta-70: #9f1853 !default !global;
  $ibm-color__magenta-80: #740937 !default !global;
  $ibm-color__magenta-90: #510224 !default !global;
  $ibm-color__magenta-100: #2a0a18 !default !global;
  $ibm-color__orange-40: #ff832b !default !global;
  $ibm-color__purple-10: #f6f2ff !default !global;
  $ibm-color__purple-20: #e8daff !default !global;
  $ibm-color__purple-30: #d4bbff !default !global;
  $ibm-color__purple-40: #be95ff !default !global;
  $ibm-color__purple-50: #a56eff !default !global;
  $ibm-color__purple-60: #8a3ffc !default !global;
  $ibm-color__purple-70: #6929c4 !default !global;
  $ibm-color__purple-80: #491d8b !default !global;
  $ibm-color__purple-90: #31135e !default !global;
  $ibm-color__purple-100: #1c0f30 !default !global;
  $ibm-color__red-10: #fff1f1 !default !global;
  $ibm-color__red-20: #ffd7d9 !default !global;
  $ibm-color__red-30: #ffb3b8 !default !global;
  $ibm-color__red-40: #ff8389 !default !global;
  $ibm-color__red-50: #fa4d56 !default !global;
  $ibm-color__red-60: #da1e28 !default !global;
  $ibm-color__red-70: #a2191f !default !global;
  $ibm-color__red-80: #750e13 !default !global;
  $ibm-color__red-90: #520408 !default !global;
  $ibm-color__red-100: #2d0709 !default !global;
  $ibm-color__teal-10: #d9fbfb !default !global;
  $ibm-color__teal-20: #9ef0f0 !default !global;
  $ibm-color__teal-30: #3ddbd9 !default !global;
  $ibm-color__teal-40: #08bdba !default !global;
  $ibm-color__teal-50: #009d9a !default !global;
  $ibm-color__teal-60: #007d79 !default !global;
  $ibm-color__teal-70: #005d5d !default !global;
  $ibm-color__teal-80: #004144 !default !global;
  $ibm-color__teal-90: #022b30 !default !global;
  $ibm-color__teal-100: #081a1c !default !global;
  $ibm-color__warm-gray-10: #f7f3f2 !default !global;
  $ibm-color__warm-gray-20: #e5e0df !default !global;
  $ibm-color__warm-gray-30: #cac5c4 !default !global;
  $ibm-color__warm-gray-40: #ada8a8 !default !global;
  $ibm-color__warm-gray-50: #8f8b8b !default !global;
  $ibm-color__warm-gray-60: #736f6f !default !global;
  $ibm-color__warm-gray-70: #565151 !default !global;
  $ibm-color__warm-gray-80: #3c3838 !default !global;
  $ibm-color__warm-gray-90: #272525 !default !global;
  $ibm-color__warm-gray-100: #171414 !default !global;
  $ibm-color__white-0: #ffffff !default !global;
  $ibm-color__yellow-20: #fdd13a !default !global;
  $ibm-color__yellow-30: #f1c21b !default !global;
  $ibm-color-map: (
    'black': (
      100: #000000,
    ),
    'blue': (
      10: #edf5ff,
      20: #d0e2ff,
      30: #a6c8ff,
      40: #78a9ff,
      50: #4589ff,
      60: #0f62fe,
      70: #0043ce,
      80: #002d9c,
      90: #001d6c,
      100: #001141,
    ),
    'cool-gray': (
      10: #f2f4f8,
      20: #dde1e6,
      30: #c1c7cd,
      40: #a2a9b0,
      50: #878d96,
      60: #697077,
      70: #4d5358,
      80: #343a3f,
      90: #21272a,
      100: #121619,
    ),
    'coolGray': (
      10: #f2f4f8,
      20: #dde1e6,
      30: #c1c7cd,
      40: #a2a9b0,
      50: #878d96,
      60: #697077,
      70: #4d5358,
      80: #343a3f,
      90: #21272a,
      100: #121619,
    ),
    'cyan': (
      10: #e5f6ff,
      20: #bae6ff,
      30: #82cfff,
      40: #33b1ff,
      50: #1192e8,
      60: #0072c3,
      70: #00539a,
      80: #003a6d,
      90: #012749,
      100: #061727,
    ),
    'gray': (
      10: #f4f4f4,
      20: #e0e0e0,
      30: #c6c6c6,
      40: #a8a8a8,
      50: #8d8d8d,
      60: #6f6f6f,
      70: #525252,
      80: #393939,
      90: #262626,
      100: #161616,
    ),
    'green': (
      10: #defbe6,
      20: #a7f0ba,
      30: #6fdc8c,
      40: #42be65,
      50: #24a148,
      60: #198038,
      70: #0e6027,
      80: #044317,
      90: #022d0d,
      100: #071908,
    ),
    'magenta': (
      10: #fff0f7,
      20: #ffd6e8,
      30: #ffafd2,
      40: #ff7eb6,
      50: #ee5396,
      60: #d12771,
      70: #9f1853,
      80: #740937,
      90: #510224,
      100: #2a0a18,
    ),
    'orange': (
      40: #ff832b,
    ),
    'purple': (
      10: #f6f2ff,
      20: #e8daff,
      30: #d4bbff,
      40: #be95ff,
      50: #a56eff,
      60: #8a3ffc,
      70: #6929c4,
      80: #491d8b,
      90: #31135e,
      100: #1c0f30,
    ),
    'red': (
      10: #fff1f1,
      20: #ffd7d9,
      30: #ffb3b8,
      40: #ff8389,
      50: #fa4d56,
      60: #da1e28,
      70: #a2191f,
      80: #750e13,
      90: #520408,
      100: #2d0709,
    ),
    'teal': (
      10: #d9fbfb,
      20: #9ef0f0,
      30: #3ddbd9,
      40: #08bdba,
      50: #009d9a,
      60: #007d79,
      70: #005d5d,
      80: #004144,
      90: #022b30,
      100: #081a1c,
    ),
    'warm-gray': (
      10: #f7f3f2,
      20: #e5e0df,
      30: #cac5c4,
      40: #ada8a8,
      50: #8f8b8b,
      60: #736f6f,
      70: #565151,
      80: #3c3838,
      90: #272525,
      100: #171414,
    ),
    'warmGray': (
      10: #f7f3f2,
      20: #e5e0df,
      30: #cac5c4,
      40: #ada8a8,
      50: #8f8b8b,
      60: #736f6f,
      70: #565151,
      80: #3c3838,
      90: #272525,
      100: #171414,
    ),
    'white': (
      0: #ffffff,
    ),
    'yellow': (
      20: #fdd13a,
      30: #f1c21b,
    ),
  ) !default !global;
}
```

</details>

- **Group**: [@carbon/colors](#carboncolors)
- **Deprecated**: Use `$carbon--colors` going forward

### ✅carbon--colors [mixin]

Define color variables

<details>
<summary>Source code</summary>

```scss
@mixin carbon--colors() {
  $carbon--black-100: #000000 !default !global;
  $carbon--blue-10: #edf5ff !default !global;
  $carbon--blue-20: #d0e2ff !default !global;
  $carbon--blue-30: #a6c8ff !default !global;
  $carbon--blue-40: #78a9ff !default !global;
  $carbon--blue-50: #4589ff !default !global;
  $carbon--blue-60: #0f62fe !default !global;
  $carbon--blue-70: #0043ce !default !global;
  $carbon--blue-80: #002d9c !default !global;
  $carbon--blue-90: #001d6c !default !global;
  $carbon--blue-100: #001141 !default !global;
  $carbon--cool-gray-10: #f2f4f8 !default !global;
  $carbon--cool-gray-20: #dde1e6 !default !global;
  $carbon--cool-gray-30: #c1c7cd !default !global;
  $carbon--cool-gray-40: #a2a9b0 !default !global;
  $carbon--cool-gray-50: #878d96 !default !global;
  $carbon--cool-gray-60: #697077 !default !global;
  $carbon--cool-gray-70: #4d5358 !default !global;
  $carbon--cool-gray-80: #343a3f !default !global;
  $carbon--cool-gray-90: #21272a !default !global;
  $carbon--cool-gray-100: #121619 !default !global;
  $carbon--cyan-10: #e5f6ff !default !global;
  $carbon--cyan-20: #bae6ff !default !global;
  $carbon--cyan-30: #82cfff !default !global;
  $carbon--cyan-40: #33b1ff !default !global;
  $carbon--cyan-50: #1192e8 !default !global;
  $carbon--cyan-60: #0072c3 !default !global;
  $carbon--cyan-70: #00539a !default !global;
  $carbon--cyan-80: #003a6d !default !global;
  $carbon--cyan-90: #012749 !default !global;
  $carbon--cyan-100: #061727 !default !global;
  $carbon--gray-10: #f4f4f4 !default !global;
  $carbon--gray-20: #e0e0e0 !default !global;
  $carbon--gray-30: #c6c6c6 !default !global;
  $carbon--gray-40: #a8a8a8 !default !global;
  $carbon--gray-50: #8d8d8d !default !global;
  $carbon--gray-60: #6f6f6f !default !global;
  $carbon--gray-70: #525252 !default !global;
  $carbon--gray-80: #393939 !default !global;
  $carbon--gray-90: #262626 !default !global;
  $carbon--gray-100: #161616 !default !global;
  $carbon--green-10: #defbe6 !default !global;
  $carbon--green-20: #a7f0ba !default !global;
  $carbon--green-30: #6fdc8c !default !global;
  $carbon--green-40: #42be65 !default !global;
  $carbon--green-50: #24a148 !default !global;
  $carbon--green-60: #198038 !default !global;
  $carbon--green-70: #0e6027 !default !global;
  $carbon--green-80: #044317 !default !global;
  $carbon--green-90: #022d0d !default !global;
  $carbon--green-100: #071908 !default !global;
  $carbon--magenta-10: #fff0f7 !default !global;
  $carbon--magenta-20: #ffd6e8 !default !global;
  $carbon--magenta-30: #ffafd2 !default !global;
  $carbon--magenta-40: #ff7eb6 !default !global;
  $carbon--magenta-50: #ee5396 !default !global;
  $carbon--magenta-60: #d12771 !default !global;
  $carbon--magenta-70: #9f1853 !default !global;
  $carbon--magenta-80: #740937 !default !global;
  $carbon--magenta-90: #510224 !default !global;
  $carbon--magenta-100: #2a0a18 !default !global;
  $carbon--orange-40: #ff832b !default !global;
  $carbon--purple-10: #f6f2ff !default !global;
  $carbon--purple-20: #e8daff !default !global;
  $carbon--purple-30: #d4bbff !default !global;
  $carbon--purple-40: #be95ff !default !global;
  $carbon--purple-50: #a56eff !default !global;
  $carbon--purple-60: #8a3ffc !default !global;
  $carbon--purple-70: #6929c4 !default !global;
  $carbon--purple-80: #491d8b !default !global;
  $carbon--purple-90: #31135e !default !global;
  $carbon--purple-100: #1c0f30 !default !global;
  $carbon--red-10: #fff1f1 !default !global;
  $carbon--red-20: #ffd7d9 !default !global;
  $carbon--red-30: #ffb3b8 !default !global;
  $carbon--red-40: #ff8389 !default !global;
  $carbon--red-50: #fa4d56 !default !global;
  $carbon--red-60: #da1e28 !default !global;
  $carbon--red-70: #a2191f !default !global;
  $carbon--red-80: #750e13 !default !global;
  $carbon--red-90: #520408 !default !global;
  $carbon--red-100: #2d0709 !default !global;
  $carbon--teal-10: #d9fbfb !default !global;
  $carbon--teal-20: #9ef0f0 !default !global;
  $carbon--teal-30: #3ddbd9 !default !global;
  $carbon--teal-40: #08bdba !default !global;
  $carbon--teal-50: #009d9a !default !global;
  $carbon--teal-60: #007d79 !default !global;
  $carbon--teal-70: #005d5d !default !global;
  $carbon--teal-80: #004144 !default !global;
  $carbon--teal-90: #022b30 !default !global;
  $carbon--teal-100: #081a1c !default !global;
  $carbon--warm-gray-10: #f7f3f2 !default !global;
  $carbon--warm-gray-20: #e5e0df !default !global;
  $carbon--warm-gray-30: #cac5c4 !default !global;
  $carbon--warm-gray-40: #ada8a8 !default !global;
  $carbon--warm-gray-50: #8f8b8b !default !global;
  $carbon--warm-gray-60: #736f6f !default !global;
  $carbon--warm-gray-70: #565151 !default !global;
  $carbon--warm-gray-80: #3c3838 !default !global;
  $carbon--warm-gray-90: #272525 !default !global;
  $carbon--warm-gray-100: #171414 !default !global;
  $carbon--white-0: #ffffff !default !global;
  $carbon--yellow-20: #fdd13a !default !global;
  $carbon--yellow-30: #f1c21b !default !global;
  $black-100: #000000 !default !global;
  $blue-10: #edf5ff !default !global;
  $blue-20: #d0e2ff !default !global;
  $blue-30: #a6c8ff !default !global;
  $blue-40: #78a9ff !default !global;
  $blue-50: #4589ff !default !global;
  $blue-60: #0f62fe !default !global;
  $blue-70: #0043ce !default !global;
  $blue-80: #002d9c !default !global;
  $blue-90: #001d6c !default !global;
  $blue-100: #001141 !default !global;
  $cool-gray-10: #f2f4f8 !default !global;
  $cool-gray-20: #dde1e6 !default !global;
  $cool-gray-30: #c1c7cd !default !global;
  $cool-gray-40: #a2a9b0 !default !global;
  $cool-gray-50: #878d96 !default !global;
  $cool-gray-60: #697077 !default !global;
  $cool-gray-70: #4d5358 !default !global;
  $cool-gray-80: #343a3f !default !global;
  $cool-gray-90: #21272a !default !global;
  $cool-gray-100: #121619 !default !global;
  $cyan-10: #e5f6ff !default !global;
  $cyan-20: #bae6ff !default !global;
  $cyan-30: #82cfff !default !global;
  $cyan-40: #33b1ff !default !global;
  $cyan-50: #1192e8 !default !global;
  $cyan-60: #0072c3 !default !global;
  $cyan-70: #00539a !default !global;
  $cyan-80: #003a6d !default !global;
  $cyan-90: #012749 !default !global;
  $cyan-100: #061727 !default !global;
  $gray-10: #f4f4f4 !default !global;
  $gray-20: #e0e0e0 !default !global;
  $gray-30: #c6c6c6 !default !global;
  $gray-40: #a8a8a8 !default !global;
  $gray-50: #8d8d8d !default !global;
  $gray-60: #6f6f6f !default !global;
  $gray-70: #525252 !default !global;
  $gray-80: #393939 !default !global;
  $gray-90: #262626 !default !global;
  $gray-100: #161616 !default !global;
  $green-10: #defbe6 !default !global;
  $green-20: #a7f0ba !default !global;
  $green-30: #6fdc8c !default !global;
  $green-40: #42be65 !default !global;
  $green-50: #24a148 !default !global;
  $green-60: #198038 !default !global;
  $green-70: #0e6027 !default !global;
  $green-80: #044317 !default !global;
  $green-90: #022d0d !default !global;
  $green-100: #071908 !default !global;
  $magenta-10: #fff0f7 !default !global;
  $magenta-20: #ffd6e8 !default !global;
  $magenta-30: #ffafd2 !default !global;
  $magenta-40: #ff7eb6 !default !global;
  $magenta-50: #ee5396 !default !global;
  $magenta-60: #d12771 !default !global;
  $magenta-70: #9f1853 !default !global;
  $magenta-80: #740937 !default !global;
  $magenta-90: #510224 !default !global;
  $magenta-100: #2a0a18 !default !global;
  $orange-40: #ff832b !default !global;
  $purple-10: #f6f2ff !default !global;
  $purple-20: #e8daff !default !global;
  $purple-30: #d4bbff !default !global;
  $purple-40: #be95ff !default !global;
  $purple-50: #a56eff !default !global;
  $purple-60: #8a3ffc !default !global;
  $purple-70: #6929c4 !default !global;
  $purple-80: #491d8b !default !global;
  $purple-90: #31135e !default !global;
  $purple-100: #1c0f30 !default !global;
  $red-10: #fff1f1 !default !global;
  $red-20: #ffd7d9 !default !global;
  $red-30: #ffb3b8 !default !global;
  $red-40: #ff8389 !default !global;
  $red-50: #fa4d56 !default !global;
  $red-60: #da1e28 !default !global;
  $red-70: #a2191f !default !global;
  $red-80: #750e13 !default !global;
  $red-90: #520408 !default !global;
  $red-100: #2d0709 !default !global;
  $teal-10: #d9fbfb !default !global;
  $teal-20: #9ef0f0 !default !global;
  $teal-30: #3ddbd9 !default !global;
  $teal-40: #08bdba !default !global;
  $teal-50: #009d9a !default !global;
  $teal-60: #007d79 !default !global;
  $teal-70: #005d5d !default !global;
  $teal-80: #004144 !default !global;
  $teal-90: #022b30 !default !global;
  $teal-100: #081a1c !default !global;
  $warm-gray-10: #f7f3f2 !default !global;
  $warm-gray-20: #e5e0df !default !global;
  $warm-gray-30: #cac5c4 !default !global;
  $warm-gray-40: #ada8a8 !default !global;
  $warm-gray-50: #8f8b8b !default !global;
  $warm-gray-60: #736f6f !default !global;
  $warm-gray-70: #565151 !default !global;
  $warm-gray-80: #3c3838 !default !global;
  $warm-gray-90: #272525 !default !global;
  $warm-gray-100: #171414 !default !global;
  $white-0: #ffffff !default !global;
  $yellow-20: #fdd13a !default !global;
  $yellow-30: #f1c21b !default !global;
  $carbon--colors: (
    'black': (
      100: #000000,
    ),
    'blue': (
      10: #edf5ff,
      20: #d0e2ff,
      30: #a6c8ff,
      40: #78a9ff,
      50: #4589ff,
      60: #0f62fe,
      70: #0043ce,
      80: #002d9c,
      90: #001d6c,
      100: #001141,
    ),
    'cool-gray': (
      10: #f2f4f8,
      20: #dde1e6,
      30: #c1c7cd,
      40: #a2a9b0,
      50: #878d96,
      60: #697077,
      70: #4d5358,
      80: #343a3f,
      90: #21272a,
      100: #121619,
    ),
    'coolGray': (
      10: #f2f4f8,
      20: #dde1e6,
      30: #c1c7cd,
      40: #a2a9b0,
      50: #878d96,
      60: #697077,
      70: #4d5358,
      80: #343a3f,
      90: #21272a,
      100: #121619,
    ),
    'cyan': (
      10: #e5f6ff,
      20: #bae6ff,
      30: #82cfff,
      40: #33b1ff,
      50: #1192e8,
      60: #0072c3,
      70: #00539a,
      80: #003a6d,
      90: #012749,
      100: #061727,
    ),
    'gray': (
      10: #f4f4f4,
      20: #e0e0e0,
      30: #c6c6c6,
      40: #a8a8a8,
      50: #8d8d8d,
      60: #6f6f6f,
      70: #525252,
      80: #393939,
      90: #262626,
      100: #161616,
    ),
    'green': (
      10: #defbe6,
      20: #a7f0ba,
      30: #6fdc8c,
      40: #42be65,
      50: #24a148,
      60: #198038,
      70: #0e6027,
      80: #044317,
      90: #022d0d,
      100: #071908,
    ),
    'magenta': (
      10: #fff0f7,
      20: #ffd6e8,
      30: #ffafd2,
      40: #ff7eb6,
      50: #ee5396,
      60: #d12771,
      70: #9f1853,
      80: #740937,
      90: #510224,
      100: #2a0a18,
    ),
    'orange': (
      40: #ff832b,
    ),
    'purple': (
      10: #f6f2ff,
      20: #e8daff,
      30: #d4bbff,
      40: #be95ff,
      50: #a56eff,
      60: #8a3ffc,
      70: #6929c4,
      80: #491d8b,
      90: #31135e,
      100: #1c0f30,
    ),
    'red': (
      10: #fff1f1,
      20: #ffd7d9,
      30: #ffb3b8,
      40: #ff8389,
      50: #fa4d56,
      60: #da1e28,
      70: #a2191f,
      80: #750e13,
      90: #520408,
      100: #2d0709,
    ),
    'teal': (
      10: #d9fbfb,
      20: #9ef0f0,
      30: #3ddbd9,
      40: #08bdba,
      50: #009d9a,
      60: #007d79,
      70: #005d5d,
      80: #004144,
      90: #022b30,
      100: #081a1c,
    ),
    'warm-gray': (
      10: #f7f3f2,
      20: #e5e0df,
      30: #cac5c4,
      40: #ada8a8,
      50: #8f8b8b,
      60: #736f6f,
      70: #565151,
      80: #3c3838,
      90: #272525,
      100: #171414,
    ),
    'warmGray': (
      10: #f7f3f2,
      20: #e5e0df,
      30: #cac5c4,
      40: #ada8a8,
      50: #8f8b8b,
      60: #736f6f,
      70: #565151,
      80: #3c3838,
      90: #272525,
      100: #171414,
    ),
    'white': (
      0: #ffffff,
    ),
    'yellow': (
      20: #fdd13a,
      30: #f1c21b,
    ),
  ) !default !global;
}
```

</details>

- **Group**: [@carbon/colors](#carboncolors)