# Office Artifacts: The One-Line Placard

[![make.fun](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/upinhuy/office-artifacts-placard/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/upinhuy/office-artifacts-placard/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

Entry for the [make.fun bounty "Office Artifacts: The One-Line Placard Contest"](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) by [@ipinchan](https://make.fun/r/hv9zk8y5).

## The entry

A one-line museum placard for an ordinary office stapler, written as if it were an ancient artifact dug from a lost civilisation — catalogue date, material, and donor included:

> Stapler, c. 1997, pressed steel. Ritual binding device of the Paper Age; clerks believed each staple sealed a soul to its file. Gift of the Facilities Department.

162 characters, one line, well inside the 180-character gate.

## How it works

`main.ts` (Node.js standard library only, no dependencies) writes that single line to `output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), validating the gate first: 1–180 characters counted per code point, a single line, not only white space.

## Run it

```sh
node main.ts
cat output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
