import { useEffect, useRef } from "react";
import CopyToClipBoardButton from "./CopyToClipboardButton";

var TrieSearch = require("trie-search");
var ts = new TrieSearch();

const HiraganaOutput = ({ romaji }) => {
  const hiraganaRef = useRef("");
  useEffect(() => {
    console.log("USSSSSSSSEEEEEE EFFFEEEEEECCCCCTTTTTTT");
    var object = {
      a: { key: "あ" },
      i: { key: "い" },
      u: { key: "う" },
      e: { key: "え" },
      o: { key: "お" },

      ka: { key: "か" },
      ki: { key: "き" },
      ku: { key: "く" },
      ke: { key: "け" },
      ko: { key: "こ" },
      kya: { key: "きゃ" },
      kyu: { key: "きゅ" },
      kyo: { key: "きょ" },

      ga: { key: "が" },
      gi: { key: "ぎ" },
      gu: { key: "ぐ" },
      ge: { key: "げ" },
      go: { key: "ご" },
      gya: { key: "ぎゃ" },
      gyu: { key: "ぎゅ" },
      gyo: { key: "ぎょ" },

      sa: { key: "さ" },
      si: { key: "し" },
      shi: { key: "し" },
      su: { key: "す" },
      se: { key: "せ" },
      so: { key: "そ" },
      sha: { key: "しゃ" },
      shu: { key: "しゅ" },
      sho: { key: "しょ" },

      za: { key: "ざ" },
      ji: { key: "じ" },
      zu: { key: "ず" },
      ze: { key: "ぜ" },
      zo: { key: "ぞ" },
      ja: { key: "じゃ" },
      ju: { key: "じゅ" },
      jo: { key: "じょ" },

      ta: { key: "た" },
      chi: { key: "ち" },
      tsu: { key: "つ" },

      tsa: { key: "つぁ" },
      tsi: { key: "つぃ" },
      tse: { key: "つぇ" },
      tso: { key: "つぉ" },

      te: { key: "て" },

      tha: { key: "てゃ" },
      thi: { key: "てぃ" },
      thu: { key: "てゅ" },
      the: { key: "てぇ" },
      tho: { key: "てょ" },

      to: { key: "と" },
      cha: { key: "ちゃ" },
      chu: { key: "ちゅ" },
      cho: { key: "ちょ" },

      da: { key: "だ" },
      dji: { key: "ぢ" },
      dzu: { key: "づ" },
      de: { key: "で" },
      do: { key: "ど" },
      dja: { key: "ぢゃ" },
      dju: { key: "ぢゅ" },
      djo: { key: "ぢょ" },

      na: { key: "な" },
      ni: { key: "に" },
      nu: { key: "ぬ" },
      ne: { key: "ね" },
      no: { key: "の" },
      nya: { key: "にゃ" },
      nyu: { key: "にゅ" },
      nyo: { key: "にょ" },

      ha: { key: "は" },
      hi: { key: "ひ" },
      fu: { key: "ふ" },
      he: { key: "へ" },
      ho: { key: "ほ" },
      hya: { key: "ひゃ" },
      hyu: { key: "ひゅ" },
      hyo: { key: "ひょ" },

      fa: { key: "ふぁ" },
      fi: { key: "ふぃ" },
      fe: { key: "ふぇ" },
      fo: { key: "ふぉ" },
      fya: { key: "ふゃ" },
      fyu: { key: "ふゅ" },
      fyo: { key: "ふぇ" },

      ba: { key: "ば" },
      bi: { key: "び" },
      bu: { key: "ぶ" },
      be: { key: "べ" },
      bo: { key: "ぼ" },
      bya: { key: "びゃ" },
      byu: { key: "びゅ" },
      byo: { key: "びょ" },

      pa: { key: "ぱ" },
      pi: { key: "ぴ" },
      pu: { key: "ぷ" },
      pe: { key: "ぺ" },
      po: { key: "ぽ" },
      pya: { key: "ぴゃ" },
      pyu: { key: "ぴゅ" },
      pyo: { key: "ぴょ" },

      ma: { key: "ま" },
      mi: { key: "み" },
      mu: { key: "む" },
      me: { key: "め" },
      mo: { key: "も" },
      mya: { key: "みゃ" },
      myu: { key: "みゅ" },
      myo: { key: "みょ" },

      ya: { key: "や" },
      yu: { key: "ゆ" },
      yo: { key: "よ" },

      ra: { key: "ら" },
      ri: { key: "り" },
      ru: { key: "る" },
      re: { key: "れ" },
      ro: { key: "ろ" },
      rya: { key: "りゃ" },
      ryu: { key: "りゅ" },
      ryo: { key: "りょ" },

      la: { key: "ら" },
      li: { key: "り" },
      lu: { key: "る" },
      le: { key: "れ" },
      lo: { key: "ろ" },
      lya: { key: "りゃ" },
      lyu: { key: "りゅ" },
      lyo: { key: "りょ" },

      wa: { key: "わ" },
      wi: { key: "うぃ" },
      wu: { key: "う" },
      we: { key: "うぇ" },
      wo: { key: "を" },

      nn: { key: "ん" },

      co: { key: "こ" },

      va: { key: "ゔぁ" },
      vi: { key: "ゔぃ" },
      vu: { key: "ゔ" },
      ve: { key: "ゔぇ" },
      vo: { key: "ゔぉ" },
    };
    ts.addFromObject(object);
    return () => {};
  }, []);

  function preprocessRomanji(romanji) {
    var chars = romanji.split("");
    var preprocessedRomanji = "";
    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      if (
        c === "a" ||
        c === "e" ||
        c === "i" ||
        c === "o" ||
        c === "u" ||
        c === "n" ||
        c === " " ||
        c === "." ||
        c === "?" ||
        c === "!" ||
        c === "-" ||
        c === "," ||
        c === "~"
      ) {
        preprocessedRomanji += c;
        continue;
      } else {
        if (i >= chars.length) {
          break;
        } else {
          if (c === chars[i + 1]) {
            preprocessedRomanji += "っ";
          } else {
            preprocessedRomanji += c;
          }
        }
      }
    }
    return preprocessedRomanji;
  }

  function notFoundInTrie(characters) {
    return ts.get(characters).length === 0;
  }

  function endNodeInTrie(characters) {
    return ts.get(characters).length === 1;
  }

  function hasLeafNodes(characters) {
    return ts.get(characters).length >= 1;
  }

  function getLeafValue(characters) {
    return ts.get(characters)[0].value.key;
  }

  function convertToHiragana(romanji) {
    romanji = preprocessRomanji(romanji, true);
    var hiragana = "";
    for (let i = 0; i < romanji.length; i++) {
      var characters = romanji[i];

      // ONE CHARACTER
      if (notFoundInTrie(characters, true)) {
        hiragana += characters;
        continue;
      }

      if (endNodeInTrie(characters, true)) {
        hiragana += getLeafValue(characters, true);
        continue;
      }

      // TWO LETTERS
      if (hasLeafNodes(characters, true)) {
        i++;
        if (i >= romanji.length) {
          hiragana += characters;
          break;
        }
        characters += romanji[i];

        if (characters === "n ") {
          hiragana += "ん";
          continue;
        }

        if (romanji[i] === " ") {
          hiragana += characters;
          continue;
        }

        if (notFoundInTrie(characters, true)) {
          if (characters[0] === "n") {
            i--;
            hiragana += "ん";
            continue;
          }
          hiragana += characters;
          continue;
        }

        if (endNodeInTrie(characters, true)) {
          hiragana += getLeafValue(characters, true);
          continue;
        }

        // THREE LETTERS
        if (hasLeafNodes(characters, true)) {
          i++;
          if (i >= romanji.length) {
            hiragana += characters;
            break;
          }
          characters += romanji[i];

          if (notFoundInTrie(characters, true)) {
            hiragana += characters;
            continue;
          }

          if (endNodeInTrie(characters, true)) {
            hiragana += getLeafValue(characters, true);
            continue;
          }
        }
      }
    }
    return hiragana;
  }

  function copyToClipBoard(e) {
    console.log("copying to clipboard");
    hiraganaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  }

  return (
    <div>
      <div className="">
        <textarea
          className="w-full text-lg text-gray-900 font-bold rounded-md shadow-lg resize-none py-2 px-4 sm:h-56 h-44"
          readOnly={true}
          ref={hiraganaRef}
          placeholder="ひらがな"
          cols="1"
          rows="1"
          value={convertToHiragana(romaji)}
        ></textarea>
        <CopyToClipBoardButton handleOnClick={copyToClipBoard} />
      </div>
    </div>
  );
};

export default HiraganaOutput;
