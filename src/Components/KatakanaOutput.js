import { useEffect, useRef } from "react";
import CopyToClipBoardButton from "./CopyToClipboardButton";

var TrieSearch = require("trie-search");
var ts = new TrieSearch();

const KatakanaOutput = ({ romaji }) => {
  const katakanaRef = useRef("");
  useEffect(() => {
    var object = {
      a: { key: "ア" },
      i: { key: "イ" },
      u: { key: "ウ" },
      e: { key: "エ" },
      o: { key: "オ" },

      ka: { key: "カ" },
      ki: { key: "キ" },
      ku: { key: "ク" },
      ke: { key: "ケ" },
      ko: { key: "コ" },
      kya: { key: "キャ" },
      kyu: { key: "キュ" },
      kyo: { key: "キョ" },

      ga: { key: "ガ" },
      gi: { key: "ギ" },
      gu: { key: "グ" },
      ge: { key: "ゲ" },
      go: { key: "ゴ" },
      gya: { key: "ギャ" },
      gyu: { key: "ギュ" },
      gyo: { key: "ギョ" },

      sa: { key: "サ" },
      si: { key: "シ" },
      shi: { key: "シ" },
      su: { key: "ス" },
      se: { key: "セ" },
      so: { key: "ソ" },
      sha: { key: "シャ" },
      shu: { key: "シュ" },
      sho: { key: "ショ" },

      za: { key: "ザ" },
      ji: { key: "ジ" },
      zu: { key: "ズ" },
      ze: { key: "ゼ" },
      zo: { key: "ゾ" },
      ja: { key: "ジャ" },
      ju: { key: "ジュ" },
      jo: { key: "ジョ" },

      ta: { key: "タ" },
      chi: { key: "チ" },
      tsu: { key: "ツ" },

      tsa: { key: "ツァ" },
      tsi: { key: "ツィ" },
      tse: { key: "ツェ" },
      tso: { key: "ツォ" },

      te: { key: "テ" },

      tha: { key: "テャ" },
      thi: { key: "ティ" },
      thu: { key: "テュ" },
      the: { key: "テェ" },
      tho: { key: "テョ" },

      to: { key: "ト" },
      cha: { key: "チャ" },
      chu: { key: "チュ" },
      cho: { key: "チョ" },

      da: { key: "ダ" },
      dji: { key: "ヂ" },
      dzu: { key: "ヅ" },
      de: { key: "デ" },
      do: { key: "ド" },
      dja: { key: "ヂャ" },
      dju: { key: "ヂュ" },
      djo: { key: "ヂョ" },

      na: { key: "ナ" },
      ni: { key: "ニ" },
      nu: { key: "ヌ" },
      ne: { key: "ネ" },
      no: { key: "ノ" },
      nya: { key: "ニャ" },
      nyu: { key: "ニュ" },
      nyo: { key: "ニョ" },

      ha: { key: "ハ" },
      hi: { key: "ヒ" },
      fu: { key: "フ" },
      he: { key: "ヘ" },
      ho: { key: "ホ" },
      hya: { key: "ヒャ" },
      hyu: { key: "ヒュ" },
      hyo: { key: "ヒョ" },

      fa: { key: "ファ" },
      fi: { key: "フィ" },
      fe: { key: "フェ" },
      fo: { key: "フォ" },
      fya: { key: "フャ" },
      fyu: { key: "フュ" },
      fyo: { key: "フェ" },

      ba: { key: "バ" },
      bi: { key: "ビ" },
      bu: { key: "ブ" },
      be: { key: "ベ" },
      bo: { key: "ボ" },
      bya: { key: "ビャ" },
      byu: { key: "ビュ" },
      byo: { key: "ビョ" },

      pa: { key: "パ" },
      pi: { key: "ピ" },
      pu: { key: "プ" },
      pe: { key: "ペ" },
      po: { key: "ポ" },
      pya: { key: "ピャ" },
      pyu: { key: "ピュ" },
      pyo: { key: "ピョ" },

      ma: { key: "マ" },
      mi: { key: "ミ" },
      mu: { key: "ム" },
      me: { key: "メ" },
      mo: { key: "モ" },
      mya: { key: "ミャ" },
      myu: { key: "ミュ" },
      myo: { key: "ミョ" },

      ya: { key: "ヤ" },
      yu: { key: "ユ" },
      yo: { key: "ヨ" },

      ra: { key: "ラ" },
      ri: { key: "リ" },
      ru: { key: "ル" },
      re: { key: "レ" },
      ro: { key: "ロ" },
      rya: { key: "リャ" },
      ryu: { key: "リュ" },
      ryo: { key: "リョ" },

      la: { key: "ラ" },
      li: { key: "リ" },
      lu: { key: "ル" },
      le: { key: "レ" },
      lo: { key: "ロ" },
      lya: { key: "リャ" },
      lyu: { key: "リュ" },
      lyo: { key: "リョ" },

      wa: { key: "ワ" },
      wi: { key: "ウィ" },
      wu: { key: "ウ" },
      we: { key: "ウェ" },
      wo: { key: "ヲ" },

      nn: { key: "ン" },

      co: { key: "コ" },

      va: { key: "ゔァ" },
      vi: { key: "ゔィ" },
      vu: { key: "ゔ" },
      ve: { key: "ゔェ" },
      vo: { key: "ゔォ" },
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
            preprocessedRomanji += "ッ";
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

  function convertToKatakana(romanji) {
    romanji = preprocessRomanji(romanji, true);
    var katakana = "";
    for (let i = 0; i < romanji.length; i++) {
      var characters = romanji[i];

      // ONE CHARACTER
      if (notFoundInTrie(characters, true)) {
        katakana += characters;
        continue;
      }

      if (endNodeInTrie(characters, true)) {
        katakana += getLeafValue(characters, true);
        continue;
      }

      // TWO LETTERS
      if (hasLeafNodes(characters, true)) {
        i++;
        if (i >= romanji.length) {
          katakana += characters;
          break;
        }
        characters += romanji[i];

        if (characters === "n ") {
          katakana += "ン";
          continue;
        }

        if (romanji[i] === " ") {
          katakana += characters;
          continue;
        }

        if (notFoundInTrie(characters, true)) {
          if (characters[0] === "n") {
            i--;
            katakana += "ン";
            continue;
          }
          katakana += characters;
          continue;
        }

        if (endNodeInTrie(characters, true)) {
          katakana += getLeafValue(characters, true);
          continue;
        }

        // THREE LETTERS
        if (hasLeafNodes(characters, true)) {
          i++;
          if (i >= romanji.length) {
            katakana += characters;
            break;
          }
          characters += romanji[i];

          if (notFoundInTrie(characters, true)) {
            katakana += characters;
            continue;
          }

          if (endNodeInTrie(characters, true)) {
            katakana += getLeafValue(characters, true);
            continue;
          }
        }
      }
    }
    return katakana;
  }

  function copyToClipBoard(e) {
    katakanaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  }

  return (
    <div>
      <div className="child">
        <textarea
          className="w-full text-lg text-gray-900 font-bold rounded-md shadow-lg resize-none py-2 px-4 sm:h-56 h-44"
          readOnly={true}
          ref={katakanaRef}
          placeholder="カタカナ"
          cols="1"
          rows="1"
          value={convertToKatakana(romaji)}
        ></textarea>
        <CopyToClipBoardButton handleOnClick={copyToClipBoard} />
      </div>
    </div>
  );
};

export default KatakanaOutput;
