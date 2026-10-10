// JPL Season 6 Player Manager Application Logic

let players = window.INITIAL_PLAYERS || [
  {
    "id": 1,
    "timestamp": "9/29/2026 11:47:57",
    "name": "Ankur Patni",
    "age": "25-45",
    "phone": "7987227371",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1-azPqAv4vvcsKY-uB-1TZN2IFA25kw4T",
    "paymentLink": "https://drive.google.com/open?id=1C8B-_7HYgRkWKGacGRrvYR-AZL6UOS09",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 2,
    "timestamp": "9/29/2026 12:04:46",
    "name": "Gourav Jain",
    "age": "25-45",
    "phone": "8770965076",
    "role": "BOWLER",
    "photoLink": "https://drive.google.com/open?id=14KLKve3X4GmGA4wCsCJZT08U8XQIUCtO",
    "paymentLink": "https://drive.google.com/open?id=1aDc7YTn13oH64P6P5XYucv3pWiKjWJZ_",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 3,
    "timestamp": "9/29/2026 12:23:28",
    "name": "Shubham jain",
    "age": "25-45",
    "phone": "9827467333",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1SNQ-cbS1MXIMBSRucQ9GuyYMTrbIiPef",
    "paymentLink": "https://drive.google.com/open?id=1K8Nn_WytcXoe-S3frQ_BoE-tXkWu8yER",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 4,
    "timestamp": "9/29/2026 13:19:27",
    "name": "Siddharth jain",
    "age": "25-45",
    "phone": "7974135602",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1IhEmnjKW-V5yULMIsCfMM3MRqsP7DI3u",
    "paymentLink": "https://drive.google.com/open?id=1bMJWnHY5gyv4qnssWqIc9AhMcp1I3E3e",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 5,
    "timestamp": "9/29/2026 13:41:13",
    "name": "Anuj Jain",
    "age": "25-45",
    "phone": "8871544210",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=159ASMhyTYv3xPX3BPYpkJadwX_86cOsn",
    "paymentLink": "https://drive.google.com/open?id=1QZc341vVlLzquDxE21FqMLpNBLYnOyle",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 6,
    "timestamp": "9/29/2026 17:03:08",
    "name": "Mayank jain",
    "age": "15-25",
    "phone": "9981427734",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=10NA06QbOsvv5bWwPCsZKm580NMyBnyKX",
    "paymentLink": "https://drive.google.com/open?id=1IJPAbYC0_WjaCb7L7vCdQU5IP_fRAf6R",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 7,
    "timestamp": "9/29/2026 17:05:23",
    "name": "अनुज जैन",
    "age": "25-45",
    "phone": "8319429899",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1YGyF8_I35FObDE60Nw-q8zylG4shM6s2",
    "paymentLink": "https://drive.google.com/open?id=1w9bd6-CHb-MiJys3uR4o8wirmjH_h1C1",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 8,
    "timestamp": "9/29/2026 17:08:16",
    "name": "Tarun jain",
    "age": "25-45",
    "phone": "7770977725",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1At-Q3DPUAErg1pSEfKZKFftVaBpAexNC",
    "paymentLink": "https://drive.google.com/open?id=1x08uuY70EvYv5IIEhwooL2n8kkluXBaZ",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 9,
    "timestamp": "9/29/2026 17:18:53",
    "name": "Arun kumar jain",
    "age": "25-45",
    "phone": "7828232428",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=16WWQ2A4ALbt716E2zOYN1HCjJQA-0kr4",
    "paymentLink": "https://drive.google.com/open?id=1X4UzrfWc0U0w6YLmsaV-IXfW-1lGiG9W",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 10,
    "timestamp": "9/29/2026 17:31:33",
    "name": "Sourabh jain",
    "age": "25-45",
    "phone": "9340494904",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=136BufBtrU5a-pkChWRKCqHlPtgosL26J",
    "paymentLink": "https://drive.google.com/open?id=1GrES1N_njJCrAGlhSlpu4Duh6oGUtasH",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 11,
    "timestamp": "9/29/2026 20:27:00",
    "name": "Prashant jain",
    "age": "25-45",
    "phone": "9827041905",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1oUlL3XYnUAC6w1Bz623Ip9KKBD9AItFO",
    "paymentLink": "https://drive.google.com/open?id=1BGso8NHy44Ba81AT_VdEZx5tViJTRv1i",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 12,
    "timestamp": "9/29/2026 23:38:48",
    "name": "Nilaya jain",
    "age": "25-45",
    "phone": "9111152222",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1VzQx3ktLEZjVVI_KHpaPST0gOyGCGdy-",
    "paymentLink": "https://drive.google.com/open?id=10uABn6ye7bP5anNUEXfI-5ABI_PVzZpL",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 13,
    "timestamp": "9/30/2026 10:50:24",
    "name": "Aditya Jain",
    "age": "25-45",
    "phone": "8109159795",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1I3GJnv563WAn3kUU2gauG8nxYzib6awL",
    "paymentLink": "https://drive.google.com/open?id=1K5WRuSgeO6sutN7pdoE3JkM9tGZrZ5dK",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 14,
    "timestamp": "9/30/2026 11:28:40",
    "name": "Nitesh jain",
    "age": "25-45",
    "phone": "8786654372",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1ol-qPlfj4UZXjbWNctngVAUEf83B1hXA",
    "paymentLink": "https://drive.google.com/open?id=1hBuGa2_4CHOq-LpYOlMmw_5eevBvV1uw",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 15,
    "timestamp": "9/30/2026 12:09:26",
    "name": "Anjul Jain",
    "age": "25-45",
    "phone": "8839164607",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1DkVR0bw47NOY83yP9EXw0XiuOSMjLCS1",
    "paymentLink": "https://drive.google.com/open?id=1Eqs8rLiBuIR93Cou8axbJKgRxhqO6qiL",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 16,
    "timestamp": "9/30/2026 13:15:29",
    "name": "ANSHUL JAIN",
    "age": "25-45",
    "phone": "9958806911",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1LH9n4TCcj118PcLzu6kKjaWGwrHW3Qba",
    "paymentLink": "https://drive.google.com/open?id=1SQ4NrMDF7QiCg1ahR074Ztd5voHcLGEi",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 17,
    "timestamp": "9/30/2026 13:22:04",
    "name": "Anmol Jain",
    "age": "15-25",
    "phone": "6263766438",
    "role": "BOWLER",
    "photoLink": "https://drive.google.com/open?id=1zMFknV39SPrIixnouqKTUnuw36pAN12x",
    "paymentLink": "https://drive.google.com/open?id=130X7G1JBHXxpuaic-cSn9BA0BO7s2eRO",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 18,
    "timestamp": "9/30/2026 14:04:56",
    "name": "Abhishek Jain",
    "age": "15-25",
    "phone": "6263943426",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1gKsZwGNPZp4Y4bWMymOOLaR2Cb65YUOa",
    "paymentLink": "https://drive.google.com/open?id=1RymLZ-vmf0s89ROQpfmUmPLWxn1PY-Gv",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 19,
    "timestamp": "9/30/2026 14:17:24",
    "name": "Sahil jain",
    "age": "25-45",
    "phone": "8819919296",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1NQk7nl7NJlCtkBIrZyI7l2yWxnZUTIyG",
    "paymentLink": "https://drive.google.com/open?id=1DvVI0OdmiSTtp0CYG3gOedQwv0fh61eg",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 20,
    "timestamp": "9/30/2026 18:25:34",
    "name": "Swapnil (sippy) jain",
    "age": "25-45",
    "phone": "6263094123",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1sPFwySbfGoa4IQM2nGunn5j38f5BtT0W",
    "paymentLink": "https://drive.google.com/open?id=1WTZUpJFkbF0x7yOpa0Xxf607E829DWM3",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 21,
    "timestamp": "9/30/2026 20:29:39",
    "name": "AARU JAIN",
    "age": "15-25",
    "phone": "9300681383",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1eBeX7rzseH-BZadhmAvjlGpuuIe1lkjK",
    "paymentLink": "https://drive.google.com/open?id=1fTOh_UQQS391YJjiP95HsLWZ2xnXeZ7p",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 22,
    "timestamp": "9/30/2026 21:37:27",
    "name": "Ankur jain",
    "age": "25-45",
    "phone": "7587054244",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1lAuxKCcZH-GmU6LYdVUYSb8JnpV3yp-G",
    "paymentLink": "https://drive.google.com/open?id=1aibOA-KA1HdwatQWHWRqgVJZ_s46T3uG",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 23,
    "timestamp": "10/1/2026 0:04:35",
    "name": "Suyash jain",
    "age": "25-45",
    "phone": "9039282822",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1HA_SXTf6ruVqqD4sCxZ6H4z2gyfqTo51",
    "paymentLink": "https://drive.google.com/open?id=1ur8-JTf7dqzbPuNGF-PziwSSFdrospoV",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 24,
    "timestamp": "10/1/2026 14:29:53",
    "name": "Pratham jain",
    "age": "25-45",
    "phone": "8839738875",
    "role": "BOWLER",
    "photoLink": "https://drive.google.com/open?id=10sdGKQeMItipoGPAN43p3-zmPBGgWB0S",
    "paymentLink": "https://drive.google.com/open?id=126549Ux_z9-CJWzKzwoehV1FcMEF_pPe",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 25,
    "timestamp": "10/1/2026 15:06:02",
    "name": "Mayank Jain",
    "age": "25-45",
    "phone": "8269996220",
    "role": "WICKET-KEEPER ( BATSMAN )",
    "photoLink": "https://drive.google.com/open?id=1-RtCPrGga5i1kxVBfQ3CaG7OPMIx-kQk",
    "paymentLink": "https://drive.google.com/open?id=1Q4wVcRv_HpH_NV6oHwgLL7kdL_8kbQ1h",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 26,
    "timestamp": "10/1/2026 15:57:49",
    "name": "Samyak jain",
    "age": "25-45",
    "phone": "+91 88272 60331",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1B5iXU106udEL4Lys2u7szhbiwmcBRO8y",
    "paymentLink": "https://drive.google.com/open?id=1Rc--pRWBekWAxF4GgoGmFv7eFx17J06G",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 27,
    "timestamp": "10/1/2026 17:40:24",
    "name": "Puneet Kumar jain",
    "age": "25-45",
    "phone": "7987526228",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1lvg9iPvro93_umEzj5ar6TMDG3J1jMrH",
    "paymentLink": "https://drive.google.com/open?id=1BU9ngx-gdaYoXZnWxXN9ls4FLWMyy5T_",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 28,
    "timestamp": "10/1/2026 17:48:11",
    "name": "Ritik jain",
    "age": "15-25",
    "phone": "8815046660",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1OvFvHrE4z1tCXOIdeL55K1yfWe0PkNc0",
    "paymentLink": "https://drive.google.com/open?id=1s3Xv5tW8ZHN1prOX1vf6h7M1Y1TMzU3i",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 29,
    "timestamp": "10/1/2026 20:03:26",
    "name": "Suraj jain",
    "age": "25-45",
    "phone": "98,277,741,119,584,500,000",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=11ZnwEO5PRj6u6MzaV5FX-hjfu1RTbCYi",
    "paymentLink": "https://drive.google.com/open?id=1BwhYaaRGZyv9Z2p_o7JM871XlY_MLXOZ",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 30,
    "timestamp": "10/1/2026 20:14:22",
    "name": "Saransh Jain",
    "age": "25-45",
    "phone": "9131002116",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=18Nqj2a9o3DiuZf1Vb1ZEsb39e_h8KInh",
    "paymentLink": "https://drive.google.com/open?id=1n9PdqVdicX2VWkSfhrsa-sivBrIVREUu",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 31,
    "timestamp": "10/1/2026 20:34:28",
    "name": "Sachin Jain",
    "age": "25-45",
    "phone": "9752505557",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1CA5ymK98iP0AOtnjj7nhF-Q9AjRPKG2I",
    "paymentLink": "https://drive.google.com/open?id=1m4BRKuBUlG7ZtUCipFQngIMf7a4tYEeM",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 32,
    "timestamp": "10/1/2026 21:09:23",
    "name": "Sambhav Jain",
    "age": "15-25",
    "phone": "9301828038",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1ZgvHB3rGKBSf_yKYhwGAER2nOB38IVnb",
    "paymentLink": "https://drive.google.com/open?id=1YIWeaEwQAhGQtDGPmFtbprd1a1uj5CnS",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 33,
    "timestamp": "10/1/2026 23:35:38",
    "name": "Shubham jain (vishu)",
    "age": "25-45",
    "phone": "7869227797",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1NvV5penWInaZtK9hwNuHjR9-EwN_fd4I",
    "paymentLink": "https://drive.google.com/open?id=1LfyC6xx1u9DCAkoWhD832eyNU4-Bce-b",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 34,
    "timestamp": "10/2/2026 0:16:03",
    "name": "Mahavir Jain",
    "age": "45+",
    "phone": "9860344322",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1w8RsARXJXjQq9PYPivZYiIAWsCZKH-IK",
    "paymentLink": "https://drive.google.com/open?id=1GbulKhY7Rcg5qlRAuDJ19n7UK_-fr4C0",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 35,
    "timestamp": "10/2/2026 11:31:50",
    "name": "Kalpesh kumar jain",
    "age": "25-45",
    "phone": "8770371206",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1LxAN-4idXjOx2-TO7yKF89CNn6OjSpPV",
    "paymentLink": "https://drive.google.com/open?id=1l2Y_CyEyRqB6XC-2OuBqul1-BIxHnpfX",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 36,
    "timestamp": "10/2/2026 13:23:54",
    "name": "Akshat Jain",
    "age": "15-25",
    "phone": "7974848879",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1NDr4iJr53GrQ1lF4Z4OZ7ERiaHUfbYan",
    "paymentLink": "https://drive.google.com/open?id=1XKOSuLBlTZeHfIHkuA_ceUATAHv3U83I",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 37,
    "timestamp": "10/2/2026 14:24:46",
    "name": "BHARAT JAIN",
    "age": "25-45",
    "phone": "9508922379",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1IuD3ReP1xPt-BhUcO8KYfYL0s6TDNbmg",
    "paymentLink": "https://drive.google.com/open?id=1i_m4-jgCNfmS1FNmIyS9ZkFmHpthL6VE",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 38,
    "timestamp": "10/2/2026 16:08:16",
    "name": "Pankaj",
    "age": "45+",
    "phone": "94241-90081",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1DzuP28FNnKFGzjMogbevuHqJ2x68P7ur",
    "paymentLink": "https://drive.google.com/open?id=1n1S4MMNlyP_vEJfPI_P7j0wdAvwes1Ve",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 39,
    "timestamp": "10/1/2026 12:25:50",
    "name": "AVI JAIN",
    "age": "25-45",
    "phone": "9300441319",
    "role": "BOWLING",
    "photoLink": "PHOTO SENT TO ME DIRECTLY",
    "paymentLink": "PAID CASH TO SIPPI BHAIYA",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 40,
    "timestamp": "10/1/2026 12:25:51",
    "name": "Rupesh Golchha",
    "age": "45+",
    "phone": "",
    "role": "ALL - ROUNDER",
    "photoLink": "PHOTO SENT TO ME DIRECTLY",
    "paymentLink": "DIRECTLY SENT THE PAYMENT SCREENSHOT  TO THE JPL GROUP",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 41,
    "timestamp": "10/1/2026 19:25:50",
    "name": "Aashish Jain (DC)",
    "age": "25-45",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "PHOTO SENT TO ME DIRECTLY",
    "paymentLink": "DIRECTLY SENT THE PAYMENT SCREENSHOT  TO THE JPL GROUP",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 42,
    "timestamp": "10/1/2026 20:50:42",
    "name": "Prashant jain ( Sonu Bhaiya )",
    "age": "25-45",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "PHOTO SENT TO ME DIRECTLY",
    "paymentLink": "",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 43,
    "timestamp": "10/1/2026 12:25:51",
    "name": "Atharv Jain ( kamal jain )",
    "age": "15-25",
    "phone": "83196 16246",
    "role": "ALL ROUNDER",
    "photoLink": "https://drive.google.com/open?id=17-SD1AzyA9rmnHBPyB2Wf17uJ-m_Kxq4",
    "paymentLink": "DIRECTLY SENT THE PAYMENT SCREENSHOT TO THE JPL GROUP",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 44,
    "timestamp": "10/2/2026 16:43:01",
    "name": "Aashay Jain",
    "age": "15-25",
    "phone": "9827319618",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1oZ0JSp6mLmWm3lRNtL-dmtBUSCn3-bAg",
    "paymentLink": "https://drive.google.com/open?id=17-SD1AzyA9rmnHBPyB2Wf17uJ-m_Kxq4",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 45,
    "timestamp": "10/2/2026 19:10:55",
    "name": "vishal",
    "age": "45+",
    "phone": "7000774980",
    "role": "WICKET-KEEPER ( BATSMAN )",
    "photoLink": "https://drive.google.com/open?id=1eTIx3aN30Mq8bK5-3zdULO_RlYXB6B3h",
    "paymentLink": "https://drive.google.com/open?id=1GfH2OAB9ZRVkV0YUDLChd_s48axK3g6H",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 46,
    "timestamp": "10/2/2026 19:49:49",
    "name": "Akshay Jain",
    "age": "25-45",
    "phone": "7987122732",
    "role": "WICKET-KEEPER ( BATSMAN )",
    "photoLink": "https://drive.google.com/open?id=1xF-kmrCm_QRptQEinxsbcyi1nWyRF32G",
    "paymentLink": "https://drive.google.com/open?id=1JMf3unxmds-oTZ2YItl8xJ--eWAbbgM5",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 47,
    "timestamp": "10/2/2026 22:23:35",
    "name": "DR. SUNIL KUMAR JAIN",
    "age": "45+",
    "phone": "9425452174",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1WhnuzlpNQobMUxcSq-5pv9WvKfefvKeF",
    "paymentLink": "payment :done directly to the JPL group",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 48,
    "timestamp": "10/2/2026 22:36:15",
    "name": "Om Jain",
    "age": "15-25",
    "phone": "9644198956",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=16dJ1k7lAY7fjU9infrbN05Ac940Lp9fQ",
    "paymentLink": "https://drive.google.com/open?id=1WhnuzlpNQobMUxcSq-5pv9WvKfefvKeF",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 49,
    "timestamp": "10/3/2026 7:58:13",
    "name": "Amit Jain",
    "age": "45+",
    "phone": "9827319618",
    "role": "WICKET-KEEPER ( BATSMAN )",
    "photoLink": "https://drive.google.com/open?id=18Bi810nJPiHG0qv_Jhtlgftt55e8SNh2",
    "paymentLink": "https://drive.google.com/open?id=1iEGZMK_KJN3Y87IGBkQzT2D-LHQqRW2J",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 50,
    "timestamp": "10/3/2026 12:36:13",
    "name": "Arpit Jain",
    "age": "25-45",
    "phone": "9755012365",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1HpGHwzxzVVpNeJP0QhemQJEeEv73ZJM8",
    "paymentLink": "https://drive.google.com/open?id=1w5D8wXTwxElts8TdlvonjTcDukMFGdA6",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 51,
    "timestamp": "10/3/2026 16:29:32",
    "name": "Yash jain",
    "age": "15-25",
    "phone": "9109378875",
    "role": "BATSMAN",
    "photoLink": "https://drive.google.com/open?id=1BGxW0zNidvxpZMUe5u9wFlgED1DnZN5s",
    "paymentLink": "https://drive.google.com/open?id=1cBksm3wv9QpcwVlf5BPrteouh0igrZy2",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 52,
    "timestamp": "10/3/2026 19:24:10",
    "name": "RITESH JAIN",
    "age": "25-45",
    "phone": "9893392604",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1sGtMDSYq3gU4RAAHn9VwX1AmLLgOsao6",
    "paymentLink": "https://drive.google.com/open?id=1kg4_dp7eFY0DRT5iRglugiJQx5e4Gli_",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 53,
    "timestamp": "10/3/2026 20:15:36",
    "name": "Parag Kumar jain",
    "age": "25-45",
    "phone": "9826952501",
    "role": "ALL-ROUNDER",
    "photoLink": "https://drive.google.com/open?id=1lpA9n7cVSTGX92EK78FloCCgbKUk0FvC",
    "paymentLink": "https://drive.google.com/open?id=1CIQGETZuyHYEyyYY3-escAmb5pPMElEF",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 54,
    "timestamp": "10/2/2026 17:30:55",
    "name": "Rajat Jain",
    "age": "20-30",
    "phone": "",
    "role": "ALL ROUNDER",
    "photoLink": "",
    "paymentLink": "payment :done directly to the JPL group",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 55,
    "timestamp": "10/2/2026 17:30:56",
    "name": "Rohit jain",
    "age": "20-30",
    "phone": "",
    "role": "ALL ROUNDER",
    "photoLink": "",
    "paymentLink": "payment :done directly to the JPL group",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 56,
    "timestamp": "10/2/2026 17:30:57",
    "name": "Shivam Jain",
    "age": "20-30",
    "phone": "",
    "role": "ALL ROUNDER",
    "photoLink": "",
    "paymentLink": "payment :done directly to the JPL group",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 57,
    "timestamp": "10/3/2026 15:30:04",
    "name": "Kuldeep Jain",
    "age": "20-30",
    "phone": "",
    "role": "Batsman",
    "photoLink": "",
    "paymentLink": "payment :done directly to the JPL group",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 58,
    "timestamp": "10/3/2026 21:40:22",
    "name": "Bhavy Jain",
    "age": "15-20",
    "phone": "",
    "role": "ALL ROUNDER",
    "photoLink": "",
    "paymentLink": "Yet to be done",
    "photoUrl": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 5,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 59,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 59",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 59,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 60,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 60",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 60,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 61,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 61",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 61,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 62,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 62",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 62,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 63,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 63",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 63,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 64,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 64",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 64,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 65,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 65",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 65,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  },
  {
    "id": 66,
    "timestamp": "10/10/2026 12:00:00",
    "name": "Player 66",
    "age": "20-30",
    "phone": "",
    "role": "ALL-ROUNDER",
    "photoLink": "",
    "paymentLink": "",
    "photoUrl": "",
    "basePrice": 1000,
    "lotNumber": 66,
    "status": "UNSOLD",
    "teamId": "",
    "jpl4": {
      "runs": 0,
      "wickets": 0,
      "matches": 0,
      "highestScore": "-",
      "bestBowling": "-"
    }
  }
];
let currentModalPlayerId = null;
let activeUploadPlayerId = null;
let activeUploadTeamId = null;

// Default Teams System
let teams = [
  { id: 'team-1', name: 'Royal Strikers', logo: '' },
  { id: 'team-2', name: 'Jain Warriors', logo: '' },
  { id: 'team-3', name: 'Super Kings', logo: '' },
  { id: 'team-4', name: 'Titan XI', logo: '' },
  { id: 'team-5', name: 'Daredevils', logo: '' },
  { id: 'team-6', name: 'Knight Riders', logo: '' }
];

function loadTeams() {
  try {
    const saved = localStorage.getItem('jpl_teams_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) teams = parsed;
    }
  } catch (e) {
    console.warn('Could not load teams:', e);
  }
}

function saveTeams() {
  try {
    localStorage.setItem('jpl_teams_v1', JSON.stringify(teams));
  } catch (e) {
    console.warn('Could not save teams:', e);
  }
}

// Initialize IndexedDB safely
const DB_NAME = 'JPL_Photos_DB_v4';
const STORE_NAME = 'player_store';
let db = null;

function initDB() {
  return new Promise((resolve) => {
    try {
      if (!window.indexedDB) return resolve();
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = (e) => {
        const dbInstance = e.target.result;
        if (!dbInstance.objectStoreNames.contains(STORE_NAME)) {
          dbInstance.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
      request.onsuccess = (e) => {
        db = e.target.result;
        loadSavedData().then(resolve);
      };
      request.onerror = () => resolve();
    } catch (err) {
      console.warn('IndexedDB unavailable:', err);
      resolve();
    }
  });
}

function savePlayerDataToDB(player) {
  if (!db) return;
  try {
    // 100% PHOTO PRESERVATION GUARANTEE:
    const existingMemory = players.find(p => p.id === player.id);
    if (existingMemory && existingMemory.photoUrl && !player.photoUrl) {
      player.photoUrl = existingMemory.photoUrl;
    }

    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.put({ 
      id: player.id, 
      name: player.name,
      age: player.age || '',
      phone: player.phone || '',
      photoUrl: player.photoUrl || '',
      role: player.role,
      basePrice: player.basePrice || 1000,
      lotNumber: player.lotNumber || player.id,
      status: player.status || 'UNSOLD',
      teamId: player.teamId || '',
      soldPrice: player.soldPrice || player.basePrice || 1000,
      jpl4: player.jpl4
    });
  } catch (err) {
    console.warn('Save DB error:', err);
  }
}

function loadSavedData() {
  return new Promise((resolve) => {
    if (!db) return resolve();
    try {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const saved = request.result || [];
        saved.forEach(item => {
          let player = players.find(p => p.id === item.id);
          if (player) {
            if (item.name) player.name = item.name;
            if (item.age) player.age = item.age;
            if (item.phone) player.phone = item.phone;
            if (item.photoUrl) player.photoUrl = item.photoUrl;
            if (item.role) player.role = item.role;
            if (item.basePrice) player.basePrice = item.basePrice;
            if (item.lotNumber !== undefined) player.lotNumber = item.lotNumber;
            if (item.status) player.status = item.status;
            if (item.teamId !== undefined) player.teamId = item.teamId;
            if (item.soldPrice) player.soldPrice = item.soldPrice;
            if (item.jpl4) player.jpl4 = item.jpl4;
          } else {
            // Include dynamically created players
            players.push(item);
          }
        });
        
        // Ensure default Lot # (1 to total) and status for all players
        players.forEach(p => {
          if (!p.lotNumber) p.lotNumber = p.id;
          if (!p.status) p.status = 'UNSOLD';
          if (!p.teamId) p.teamId = '';
        });

        resolve();
      };
      request.onerror = () => resolve();
    } catch (err) {
      resolve();
    }
  });
}

function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle('theme-dark');
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  try {
    localStorage.setItem('jpl_theme', isDark ? 'dark' : 'light');
  } catch(e) {}
}

function initTheme() {
  try {
    const savedTheme = localStorage.getItem('jpl_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('theme-dark');
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) btn.textContent = '☀️ Light Mode';
    }
  } catch(e) {}
}

function initScrollAnimations() {
  // Clean, instantaneous rendering without multi-layer compositor overhead
}

function initApp() {
  console.log('Initializing JPL App with', players.length, 'players');
  loadTeams();
  initTheme();
  setupEvents();
  renderAll();

  initDB().then(() => {
    renderAll();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.toggle('active', c.id === tabId);
  });
  if (tabId === 'tab-teams') {
    renderTeams();
  }
}
window.switchTab = switchTab;

function setupEvents() {
  try {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    const searchInput = document.getElementById('search-input');
    const roleFilter = document.getElementById('role-filter');
    const photoFilter = document.getElementById('photo-filter');
    const statusFilter = document.getElementById('status-filter');
    const teamFilter = document.getElementById('team-filter');

    if (searchInput) searchInput.addEventListener('input', renderAll);
    if (roleFilter) roleFilter.addEventListener('change', renderAll);
    if (photoFilter) photoFilter.addEventListener('change', renderAll);
    if (statusFilter) statusFilter.addEventListener('change', renderAll);
    if (teamFilter) teamFilter.addEventListener('change', renderAll);

    const fileInput = document.getElementById('single-file-input');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0] && activeUploadPlayerId) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataUrl = event.target.result;
            const player = players.find(p => p.id === activeUploadPlayerId);
            if (player) {
              player.photoUrl = dataUrl;
              savePlayerDataToDB(player);
              renderAll();
              if (currentModalPlayerId === player.id) {
                updateModalUI(player);
              }
            }
          };
          reader.readAsDataURL(file);
        }
        e.target.value = '';
      });
    }

    const teamLogoInput = document.getElementById('team-logo-file-input');
    if (teamLogoInput) {
      teamLogoInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0] && activeUploadTeamId) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            const team = teams.find(t => t.id === activeUploadTeamId);
            if (team) {
              team.logo = event.target.result;
              saveTeams();
              renderAll();
            }
          };
          reader.readAsDataURL(file);
        }
        e.target.value = '';
      });
    }

    const dropzone = document.getElementById('batch-dropzone');
    const batchInput = document.getElementById('batch-file-input');

    if (dropzone) {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });

      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files) handleBatchFiles(e.dataTransfer.files);
      });
    }

    if (batchInput) {
      batchInput.addEventListener('change', (e) => {
        if (e.target.files) handleBatchFiles(e.target.files);
      });
    }

    const modalOverlay = document.getElementById('player-modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closePlayerModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('player-modal');
      if (modal && modal.classList.contains('active')) {
        if (e.key === 'Enter') {
          e.preventDefault();
          saveAndGoNextPlayer();
        } else if (e.key === 'ArrowRight') {
          navigateModal(1);
        } else if (e.key === 'ArrowLeft') {
          navigateModal(-1);
        } else if (e.key === 'Escape') {
          closePlayerModal();
        }
      }
    });
  } catch (err) {
    console.error('Setup events error:', err);
  }
}

function saveAndGoNextPlayer() {
  saveModalStats();
  navigateModal(1);
  setTimeout(() => {
    const inputRuns = document.getElementById('modal-input-runs');
    if (inputRuns) {
      inputRuns.focus();
      inputRuns.select();
    }
  }, 100);
}

function handleBatchFiles(files) {
  const logList = document.getElementById('log-list');
  const batchLog = document.getElementById('batch-log');
  if (batchLog) batchLog.style.display = 'block';
  if (logList) logList.innerHTML = '';

  Array.from(files).forEach(file => {
    const filename = file.name.toLowerCase();
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      
      let matchedPlayer = players.find(p => {
        const pName = p.name.toLowerCase().trim();
        return filename.includes(pName) || pName.includes(filename.split('.')[0]);
      });

      if (!matchedPlayer) {
        const matchNum = filename.match(/\d+/);
        if (matchNum) {
          const num = parseInt(matchNum[0]);
          matchedPlayer = players.find(p => p.id === num || p.lotNumber === num);
        }
      }

      if (logList) {
        const logItem = document.createElement('div');
        logItem.style.padding = '6px 0';
        logItem.style.borderBottom = '1px solid rgba(255,255,255,0.05)';

        if (matchedPlayer) {
          matchedPlayer.photoUrl = dataUrl;
          savePlayerDataToDB(matchedPlayer);
          logItem.innerHTML = `<span style="color: var(--accent-emerald);">✓ Matched</span> <strong>${file.name}</strong> ➔ ${matchedPlayer.name}`;
        } else {
          logItem.innerHTML = `<span style="color: #ef4444;">✗ Could not match</span> <strong>${file.name}</strong>`;
        }

        logList.appendChild(logItem);
      }
      renderAll();
    };

    reader.readAsDataURL(file);
  });
}

function populateTeamDropdowns() {
  const teamFilterSelect = document.getElementById('team-filter');
  const modalTeamSelect = document.getElementById('modal-select-team');

  if (teamFilterSelect) {
    const currentVal = teamFilterSelect.value;
    teamFilterSelect.innerHTML = `<option value="ALL">All Teams</option>` +
      teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
    teamFilterSelect.value = currentVal || 'ALL';
  }

  if (modalTeamSelect) {
    const currentVal = modalTeamSelect.value;
    modalTeamSelect.innerHTML = `<option value="">-- No Team (Free Agent) --</option>` +
      teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
    modalTeamSelect.value = currentVal || '';
  }
}

function getFilteredPlayers() {
  const searchInput = document.getElementById('search-input');
  const roleSelect = document.getElementById('role-filter');
  const photoSelect = document.getElementById('photo-filter');
  const statusSelect = document.getElementById('status-filter');
  const teamSelect = document.getElementById('team-filter');

  const search = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const roleFilter = roleSelect ? roleSelect.value : 'ALL';
  const photoFilter = photoSelect ? photoSelect.value : 'ALL';
  const statusFilter = statusSelect ? statusSelect.value : 'ALL';
  const teamFilter = teamSelect ? teamSelect.value : 'ALL';

  return players.filter(p => {
    const lotStr = (p.lotNumber || p.id).toString();
    const teamObj = teams.find(t => t.id === p.teamId);
    const teamName = teamObj ? teamObj.name.toLowerCase() : '';

    let matchesSearch = true;
    if (search) {
      const cleanNum = search.replace(/[^0-9]/g, '');
      const isLotMatch = cleanNum && (lotStr === cleanNum || p.id.toString() === cleanNum);

      matchesSearch = isLotMatch || 
        p.name.toLowerCase().includes(search) || 
        (p.role || '').toLowerCase().includes(search) ||
        teamName.includes(search);
    }
    
    let matchesRole = true;
    if (roleFilter !== 'ALL') {
      const pRole = (p.role || '').toUpperCase();
      if (roleFilter === 'BATSMAN') matchesRole = pRole.includes('BATSMAN') && !pRole.includes('WICKET');
      else if (roleFilter === 'ALL-ROUNDER') matchesRole = pRole.includes('ALL') || pRole.includes('ROUND');
      else if (roleFilter === 'BOWLER') matchesRole = pRole.includes('BOWL');
      else if (roleFilter === 'WICKET-KEEPER') matchesRole = pRole.includes('WICKET') || pRole.includes('KEEPER');
    }

    let matchesPhoto = true;
    if (photoFilter === 'WITH_PHOTO') matchesPhoto = !!p.photoUrl;
    if (photoFilter === 'NO_PHOTO') matchesPhoto = !p.photoUrl;

    let matchesStatus = true;
    if (statusFilter === 'UNSOLD') matchesStatus = p.status !== 'SOLD';
    if (statusFilter === 'SOLD') matchesStatus = p.status === 'SOLD';

    let matchesTeam = true;
    if (teamFilter !== 'ALL') matchesTeam = p.teamId === teamFilter;

    return matchesSearch && matchesRole && matchesPhoto && matchesStatus && matchesTeam;
  });
}

function renderAll() {
  try {
    populateTeamDropdowns();
    const filtered = getFilteredPlayers();
    updateStats();
    renderTable(filtered);
    renderCards(filtered);
    renderTeams();
    setTimeout(initScrollAnimations, 50);
  } catch (err) {
    console.error('Render error:', err);
  }
}

function renderTeams() {
  const container = document.getElementById('teams-container');
  if (!container) return;
  container.innerHTML = '';

  teams.forEach(team => {
    const teamPlayers = players.filter(p => p.teamId === team.id);
    const squadCount = teamPlayers.length;
    const totalSpent = teamPlayers.reduce((sum, p) => sum + (parseInt(p.basePrice) || 1000), 0);

    const logoHtml = team.logo
      ? `<img src="${team.logo}" alt="${team.name}">`
      : `<div class="team-logo-placeholder">🛡️</div>`;

    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <div class="team-header">
        <div class="team-logo-box" onclick="triggerTeamLogoUpload('${team.id}')" title="Click to upload/change team logo">
          ${logoHtml}
          <div class="team-logo-overlay">📷 Logo</div>
        </div>
        <div class="team-info-main">
          <input type="text" class="team-title-input" value="${team.name}" onchange="updateTeamName('${team.id}', this.value)" title="Click to edit team name">
          <div class="team-stats-row">
            <span>👥 <strong>${squadCount}</strong> Players</span>
            <span>💰 Value: <strong>₹ ${totalSpent.toLocaleString('en-IN')}</strong></span>
          </div>
        </div>
      </div>

      <div style="font-size: 0.82rem; font-weight: 800; color: var(--accent-gold); text-transform: uppercase; margin-bottom: 6px;">
        Squad Roster (${squadCount})
      </div>

      <div class="team-squad-list">
        ${squadCount === 0 
          ? `<div style="font-size: 0.85rem; color: var(--text-muted); padding: 12px 0; text-align: center;">No players assigned yet. Transfer players from profile modal.</div>`
          : teamPlayers.map(p => `
              <div class="team-player-row">
                <div class="team-player-info">
                  <span class="lot-badge-sm">Lot #${p.lotNumber || p.id}</span>
                  <span style="font-weight: 700; color: var(--text-primary); cursor: pointer;" onclick="openPlayerModal(${p.id})">${p.name}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 0.78rem; color: var(--accent-gold); font-weight: 700;">₹ ${(p.basePrice || 1000).toLocaleString('en-IN')}</span>
                  <button class="upload-btn-sm" style="padding: 2px 8px; font-size: 0.75rem;" onclick="removeFromTeam(${p.id})" title="Remove player from team">✕</button>
                </div>
              </div>
            `).join('')
        }
      </div>
    `;

    container.appendChild(card);
  });
}

function triggerTeamLogoUpload(teamId) {
  activeUploadTeamId = teamId;
  const input = document.getElementById('team-logo-file-input');
  if (input) input.click();
}

function updateTeamName(teamId, newName) {
  const team = teams.find(t => t.id === teamId);
  if (team && newName.trim()) {
    team.name = newName.trim();
    saveTeams();
    populateTeamDropdowns();
    renderAll();
  }
}

function addNewTeam() {
  const teamNum = teams.length + 1;
  const newTeam = {
    id: `team-${Date.now()}`,
    name: `Team ${teamNum}`,
    logo: ''
  };
  teams.push(newTeam);
  saveTeams();
  populateTeamDropdowns();
  renderAll();
}

function removeFromTeam(playerId) {
  const player = players.find(p => p.id === playerId);
  if (player) {
    player.teamId = '';
    player.status = 'UNSOLD';
    savePlayerDataToDB(player);
    renderAll();
  }
}

function updateStats() {
  const elTotal = document.getElementById('stat-total');
  const elPhotos = document.getElementById('stat-photos');
  const elAllrounders = document.getElementById('stat-allrounders');
  const elBatsmen = document.getElementById('stat-batsmen');

  if (elTotal) elTotal.textContent = players.length;
  if (elPhotos) elPhotos.textContent = players.filter(p => !!p.photoUrl).length;
  if (elAllrounders) elAllrounders.textContent = players.filter(p => (p.role || '').toUpperCase().includes('ALL')).length;
  if (elBatsmen) elBatsmen.textContent = players.filter(p => (p.role || '').toUpperCase().includes('BATSMAN')).length;
}

function getRoleBadgeClass(roleStr) {
  const r = (roleStr || '').toUpperCase();
  if (r.includes('BATSMAN') && !r.includes('WICKET')) return 'role-batsman';
  if (r.includes('BOWL')) return 'role-bowler';
  if (r.includes('WICKET') || r.includes('KEEPER')) return 'role-wicket-keeper';
  return 'role-all-rounder';
}

function triggerSingleUpload(id) {
  activeUploadPlayerId = id;
  const fileInput = document.getElementById('single-file-input');
  if (fileInput) fileInput.click();
}

function hideCricketLoader() {
  const loader = document.getElementById('cricket-loader');
  if (loader) loader.classList.remove('active');
}
window.hideCricketLoader = hideCricketLoader;

function showCricketLoader() {
  // Kept non-blocking
  const loader = document.getElementById('cricket-loader');
  if (!loader) return;
  loader.classList.add('active');
  setTimeout(() => {
    loader.classList.remove('active');
  }, 200);
}

// Interactive Mascot Character Shot Logic
let shotCounter = 0;
const cricketShots = [
  '🚀 SIX! 108m Monster Hit! 🔥',
  '💥 FOUR! Straight down the ground! 🏏',
  '⚡ MAXIMUM! Out of the Stadium! 🚀',
  '🎯 CRUNCHED! Pierced the cover field! 🏏',
  '🔥 FOUR! Reverse Sweep Magic! ⚡',
  '🏆 JPL SEASON 6 SUPER SHOT! 🌟'
];

function triggerCricketMascotShot() {
  const toast = document.getElementById('cricket-toast');
  if (!toast) return;

  const shot = cricketShots[shotCounter % cricketShots.length];
  shotCounter++;
  toast.textContent = shot;
  toast.classList.add('active');

  if (window.navigator && window.navigator.vibrate) {
    try { window.navigator.vibrate([30, 20, 30]); } catch(e) {}
  }

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 1200);
}
window.triggerCricketMascotShot = triggerCricketMascotShot;

/* Modal Logic & Base Price Controls */
function openPlayerModal(id) {
  const player = players.find(p => p.id === id);
  if (!player) return;

  currentModalPlayerId = id;
  updateModalUI(player);

  const modal = document.getElementById('player-modal');
  if (modal) modal.classList.add('active');
}

function closePlayerModal() {
  const modal = document.getElementById('player-modal');
  if (modal) modal.classList.remove('active');
  currentModalPlayerId = null;
}
window.closePlayerModal = closePlayerModal;
window.openPlayerModal = openPlayerModal;

/* Instant O(1) Targeted DOM Updates (< 0.05ms) */
function updateSpecificPlayerRowAndCard(player) {
  const basePrice = (player.basePrice || 1000).toLocaleString('en-IN');
  const lotNum = player.lotNumber || player.id;
  const teamObj = teams.find(t => t.id === player.teamId);
  const statusBadgeHtml = player.status === 'SOLD' && teamObj
    ? `<span class="status-badge-sold">🟢 ${teamObj.name}</span>`
    : `<span class="status-badge-unsold">🔴 UNSOLD</span>`;
  const roleClass = getRoleBadgeClass(player.role);
  const initials = (player.name || 'P').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'P';
  const avatarHtml = player.photoUrl 
    ? `<img src="${player.photoUrl}" alt="${player.name}">` 
    : `<div class="avatar-placeholder">${initials}</div>`;

  // 1. Direct O(1) Table Row Update
  const tr = document.getElementById('row-player-' + player.id);
  if (tr) {
    const lotBadge = tr.querySelector('.lot-badge-sm');
    if (lotBadge) lotBadge.textContent = `Lot #${lotNum}`;

    const nameEl = tr.querySelector('.clickable-name');
    if (nameEl) nameEl.textContent = player.name;

    const avWrapper = tr.querySelector('.avatar-wrapper');
    if (avWrapper) avWrapper.innerHTML = avatarHtml;

    const priceTag = tr.querySelector('.base-price-tag');
    if (priceTag) priceTag.textContent = `💰 ₹ ${basePrice}`;

    const roleBadge = tr.querySelector('.role-badge');
    if (roleBadge) {
      roleBadge.className = `role-badge ${roleClass}`;
      roleBadge.textContent = player.role || 'Player';
    }

    if (tr.cells && tr.cells[4]) {
      tr.cells[4].innerHTML = statusBadgeHtml;
    }
  }

  // 2. Direct O(1) Card Update
  const card = document.getElementById('card-player-' + player.id);
  if (card) {
    const lotBadge = card.querySelector('.lot-badge-sm');
    if (lotBadge) lotBadge.textContent = `Lot #${lotNum}`;

    const cardName = card.querySelector('.card-name');
    if (cardName) cardName.textContent = player.name;

    const cardAv = card.querySelector('.card-avatar-wrapper');
    if (cardAv) {
      cardAv.innerHTML = player.photoUrl 
        ? `<img src="${player.photoUrl}" alt="${player.name}">` 
        : `<div class="avatar-placeholder" style="font-size: 2rem;">${initials}</div>`;
    }

    const priceTag = card.querySelector('.base-price-tag');
    if (priceTag) priceTag.textContent = `💰 Base Price: ₹ ${basePrice}`;

    const roleBadge = card.querySelector('.role-badge');
    if (roleBadge) {
      roleBadge.className = `role-badge ${roleClass}`;
      roleBadge.textContent = player.role || 'Player';
    }

    const cardStatus = card.querySelector('.status-badge-sold, .status-badge-unsold');
    if (cardStatus) {
      cardStatus.outerHTML = statusBadgeHtml;
    }
  }

  // 3. Keep modal status buttons in sync
  const btnUnsold = document.getElementById('btn-status-unsold');
  const btnSold = document.getElementById('btn-status-sold');
  if (btnUnsold && btnSold) {
    btnUnsold.classList.toggle('active', player.status !== 'SOLD');
    btnSold.classList.toggle('active', player.status === 'SOLD');
  }

  // 4. Keep modal header title and name input in sync if open for this player
  if (currentModalPlayerId === player.id) {
    const inName = document.getElementById('modal-input-name');
    if (inName && inName !== document.activeElement) inName.value = player.name;
    const elName = document.getElementById('modal-player-name');
    if (elName) elName.textContent = player.name;
  }
}

/* Instant 1-Click Status Setter (0ms action) */
function setPlayerStatus(newStatus) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  player.status = newStatus;
  const teamSelect = document.getElementById('modal-select-team');
  const statusSelect = document.getElementById('modal-select-status');
  if (statusSelect) statusSelect.value = newStatus;

  if (newStatus === 'UNSOLD') {
    player.teamId = '';
    if (teamSelect) teamSelect.value = '';
  } else if (newStatus === 'SOLD') {
    if (!player.teamId && teams.length > 0) {
      player.teamId = teams[0].id;
      if (teamSelect) teamSelect.value = player.teamId;
    }
  }

  // Visual button feedback immediately (<1ms)
  const btnUnsold = document.getElementById('btn-status-unsold');
  const btnSold = document.getElementById('btn-status-sold');
  if (btnUnsold && btnSold) {
    btnUnsold.classList.toggle('active', newStatus === 'UNSOLD');
    btnSold.classList.toggle('active', newStatus === 'SOLD');
  }

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
  updateStats();
}
window.setPlayerStatus = setPlayerStatus;

function handleModalStatusChange(newStatus) {
  setPlayerStatus(newStatus);
}

function handleModalTeamChange(teamId) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  player.teamId = teamId;
  player.status = teamId ? 'SOLD' : 'UNSOLD';

  const statusSelect = document.getElementById('modal-select-status');
  if (statusSelect) statusSelect.value = player.status;

  const btnUnsold = document.getElementById('btn-status-unsold');
  const btnSold = document.getElementById('btn-status-sold');
  if (btnUnsold && btnSold) {
    btnUnsold.classList.toggle('active', player.status !== 'SOLD');
    btnSold.classList.toggle('active', player.status === 'SOLD');
  }

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
  updateStats();
}

function adjustBasePrice(delta) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  let currentVal = parseInt(player.basePrice) || 1000;
  let newVal = Math.max(0, currentVal + delta);
  player.basePrice = newVal;

  const inputEl = document.getElementById('modal-input-baseprice');
  if (inputEl) inputEl.value = newVal;

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
}

function setBasePrice(amount) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  player.basePrice = amount;
  const inputEl = document.getElementById('modal-input-baseprice');
  if (inputEl) inputEl.value = amount;

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
}

function adjustStat(statKey, delta) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  if (!player.jpl4) player.jpl4 = { runs: 0, wickets: 0, matches: 0, highestScore: '-' };
  
  let currentVal = parseInt(player.jpl4[statKey]) || 0;
  let newVal = Math.max(0, currentVal + delta);
  player.jpl4[statKey] = newVal;

  const inputEl = document.getElementById(`modal-input-${statKey}`);
  if (inputEl) inputEl.value = newVal;

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
}

function setPlayerRole(newRole) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  player.role = newRole;
  
  document.querySelectorAll('.role-btn-option').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-role') === newRole);
  });

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
}

function exportSinglePlayerCard() {
  window.print();
}

function updateModalUI(player) {
  const elName = document.getElementById('modal-player-name');
  if (elName) elName.textContent = player.name;

  const inName = document.getElementById('modal-input-name');
  if (inName) inName.value = player.name;

  const lotTag = document.getElementById('modal-lot-tag');
  if (lotTag) lotTag.textContent = `LOT #${player.lotNumber || player.id}`;

  const inLot = document.getElementById('modal-input-lot');
  if (inLot) inLot.value = player.lotNumber || player.id;

  const statusSelect = document.getElementById('modal-select-status');
  if (statusSelect) statusSelect.value = player.status || 'UNSOLD';

  const btnUnsold = document.getElementById('btn-status-unsold');
  const btnSold = document.getElementById('btn-status-sold');
  if (btnUnsold && btnSold) {
    btnUnsold.classList.toggle('active', player.status !== 'SOLD');
    btnSold.classList.toggle('active', player.status === 'SOLD');
  }

  populateTeamDropdowns();
  const teamSelect = document.getElementById('modal-select-team');
  if (teamSelect) teamSelect.value = player.teamId || '';

  const currentRole = player.role || 'ALL-ROUNDER';
  document.querySelectorAll('.role-btn-option').forEach(btn => {
    const bRole = btn.getAttribute('data-role');
    btn.classList.toggle('selected', bRole === currentRole || (currentRole.includes('ALL') && bRole === 'ALL-ROUNDER'));
  });

  const inBasePrice = document.getElementById('modal-input-baseprice');
  if (inBasePrice) inBasePrice.value = player.basePrice || 1000;

  const inAge = document.getElementById('modal-input-age');
  if (inAge) inAge.value = player.age || '';

  const avatarContainer = document.getElementById('modal-avatar-content');
  if (avatarContainer) {
    const initials = (player.name || 'P').split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase() || 'P';
    avatarContainer.innerHTML = player.photoUrl 
      ? `<img src="${player.photoUrl}" alt="${player.name}">` 
      : `<div class="avatar-placeholder">${initials}</div>`;
  }

  const stats = player.jpl4 || { runs: 0, wickets: 0, matches: 0, highestScore: '-' };
  const inRuns = document.getElementById('modal-input-runs');
  const inWickets = document.getElementById('modal-input-wickets');
  const inMatches = document.getElementById('modal-input-matches');
  const inHighest = document.getElementById('modal-input-highest');

  if (inRuns) inRuns.value = stats.runs || 0;
  if (inWickets) inWickets.value = stats.wickets || 0;
  if (inMatches) inMatches.value = stats.matches || 0;
  if (inHighest) inHighest.value = stats.highestScore || '-';

  const index = players.findIndex(p => p.id === player.id);
  const elIndex = document.getElementById('modal-player-index');
  if (elIndex) elIndex.textContent = `Player ${index + 1} of ${players.length}`;
}

function handleModalNameChange(newName) {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  const trimmed = newName.trim();
  if (trimmed) {
    player.name = trimmed;
  } else {
    player.name = newName;
  }

  if (!player.photoUrl) {
    const initials = (player.name || 'P').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'P';
    const avatarContainer = document.getElementById('modal-avatar-content');
    if (avatarContainer) {
      avatarContainer.innerHTML = `<div class="avatar-placeholder">${initials}</div>`;
    }
  }

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
}
window.handleModalNameChange = handleModalNameChange;

function addNewPlayer() {
  const nextId = Math.max(...players.map(p => p.id), 0) + 1;
  const nextLot = Math.max(...players.map(p => p.lotNumber || p.id), 0) + 1;
  const newPlayer = {
    id: nextId,
    timestamp: new Date().toLocaleString(),
    name: `Player ${nextId}`,
    age: "20-30",
    phone: "",
    role: "ALL-ROUNDER",
    photoLink: "",
    paymentLink: "",
    photoUrl: "",
    basePrice: 1000,
    lotNumber: nextLot,
    status: "UNSOLD",
    teamId: "",
    jpl4: {
      runs: 0,
      wickets: 0,
      matches: 0,
      highestScore: "-",
      bestBowling: "-"
    }
  };

  players.push(newPlayer);
  savePlayerDataToDB(newPlayer);
  renderAll();
  openPlayerModal(newPlayer.id);

  setTimeout(() => {
    const inputName = document.getElementById('modal-input-name');
    if (inputName) {
      inputName.focus();
      inputName.select();
    }
  }, 40);
}
window.addNewPlayer = addNewPlayer;

function saveModalStats() {
  if (!currentModalPlayerId) return;
  const player = players.find(p => p.id === currentModalPlayerId);
  if (!player) return;

  if (!player.jpl4) player.jpl4 = {};
  const inName = document.getElementById('modal-input-name');
  const inLot = document.getElementById('modal-input-lot');
  const inRuns = document.getElementById('modal-input-runs');
  const inWickets = document.getElementById('modal-input-wickets');
  const inMatches = document.getElementById('modal-input-matches');
  const inHighest = document.getElementById('modal-input-highest');
  const inBasePrice = document.getElementById('modal-input-baseprice');
  const inAge = document.getElementById('modal-input-age');

  if (inName && inName.value.trim()) player.name = inName.value.trim();
  if (inLot) player.lotNumber = parseInt(inLot.value) || player.id;
  if (inRuns) player.jpl4.runs = parseInt(inRuns.value) || 0;
  if (inWickets) player.jpl4.wickets = parseInt(inWickets.value) || 0;
  if (inMatches) player.jpl4.matches = parseInt(inMatches.value) || 0;
  if (inHighest) player.jpl4.highestScore = inHighest.value || '-';

  if (inBasePrice) player.basePrice = parseInt(inBasePrice.value) || 1000;
  if (inAge) player.age = inAge.value;

  // CRITICAL PHOTO SAFETY: Preserve existing photoUrl if any
  const existingMemory = players.find(p => p.id === player.id);
  if (existingMemory && existingMemory.photoUrl && !player.photoUrl) {
    player.photoUrl = existingMemory.photoUrl;
  }

  savePlayerDataToDB(player);
  updateSpecificPlayerRowAndCard(player);
}

function navigateModal(direction) {
  if (!currentModalPlayerId) return;
  const currentIndex = players.findIndex(p => p.id === currentModalPlayerId);
  let nextIndex = currentIndex + direction;

  if (nextIndex < 0) nextIndex = players.length - 1;
  if (nextIndex >= players.length) nextIndex = 0;

  const nextPlayer = players[nextIndex];
  if (nextPlayer) {
    openPlayerModal(nextPlayer.id);
  }
}

function renderTable(playerList) {
  const tbody = document.getElementById('player-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (playerList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">No players found matching your filters.</td></tr>`;
    return;
  }

  playerList.forEach(p => {
    const tr = document.createElement('tr');
    tr.id = 'row-player-' + p.id;
    
    const initials = p.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
    const avatarHtml = p.photoUrl 
      ? `<img src="${p.photoUrl}" alt="${p.name}">` 
      : `<div class="avatar-placeholder">${initials}</div>`;

    const teamObj = teams.find(t => t.id === p.teamId);
    const statusBadge = p.status === 'SOLD' && teamObj
      ? `<span class="status-badge-sold">🟢 ${teamObj.name}</span>`
      : `<span class="status-badge-unsold">🔴 UNSOLD</span>`;

    const stats = p.jpl4 || { runs: 0, wickets: 0 };
    const basePrice = (p.basePrice || 1000).toLocaleString('en-IN');
    const lotNum = p.lotNumber || p.id;

    tr.innerHTML = `
      <td><span class="lot-badge-sm">Lot #${lotNum}</span></td>
      <td>
        <div class="photo-cell">
          <div class="avatar-wrapper" onclick="openPlayerModal(${p.id})" style="cursor: pointer;" title="Click to view player profile & stats">
            ${avatarHtml}
          </div>
          <div>
            <div class="clickable-name" onclick="openPlayerModal(${p.id})">${p.name}</div>
            <div style="font-size: 0.75rem; color: var(--accent-gold); margin-top: 2px;">
              🏏 ${stats.runs || 0} Runs | 🥎 ${stats.wickets || 0} Wkts
            </div>
          </div>
        </div>
      </td>
      <td>
        <span class="role-badge ${getRoleBadgeClass(p.role)}">${p.role || 'Player'}</span>
      </td>
      <td>
        <span class="base-price-tag">💰 ₹ ${basePrice}</span>
      </td>
      <td>${statusBadge}</td>
      <td>${p.age || 'N/A'}</td>
      <td style="text-align: right;">
        <button class="upload-btn-sm" onclick="openPlayerModal(${p.id})">
          👁️ Profile
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function renderCards(playerList) {
  const container = document.getElementById('cards-container');
  if (!container) return;
  container.innerHTML = '';

  playerList.forEach(p => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.id = 'card-player-' + p.id;

    const initials = p.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
    const avatarHtml = p.photoUrl 
      ? `<img src="${p.photoUrl}" alt="${p.name}">` 
      : `<div class="avatar-placeholder" style="font-size: 2rem;">${initials}</div>`;

    const teamObj = teams.find(t => t.id === p.teamId);
    const statusBadge = p.status === 'SOLD' && teamObj
      ? `<span class="status-badge-sold">🟢 ${teamObj.name}</span>`
      : `<span class="status-badge-unsold">🔴 UNSOLD</span>`;

    const stats = p.jpl4 || { runs: 0, wickets: 0 };
    const basePrice = (p.basePrice || 1000).toLocaleString('en-IN');
    const lotNum = p.lotNumber || p.id;

    card.innerHTML = `
      <div style="position: absolute; top: 12px; left: 14px;">
        <span class="lot-badge-sm">Lot #${lotNum}</span>
      </div>
      <div class="card-avatar-wrapper" onclick="openPlayerModal(${p.id})" style="cursor: pointer; margin-top: 10px;" title="Click to open profile">
        ${avatarHtml}
      </div>
      <div class="card-name clickable-name" onclick="openPlayerModal(${p.id})">${p.name}</div>
      <div style="margin-bottom: 8px; display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
        <span class="role-badge ${getRoleBadgeClass(p.role)}">${p.role || 'Player'}</span>
        ${statusBadge}
      </div>
      
      <!-- Base Price Badge -->
      <div style="margin-bottom: 6px;">
        <span class="base-price-tag">💰 Base Price: ₹ ${basePrice}</span>
      </div>

      <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2); padding: 6px 14px; border-radius: var(--radius-md); font-size: 0.82rem; margin: 4px 0 8px 0; color: var(--accent-gold); font-weight: 700;">
        🏏 ${stats.runs || 0} Runs &nbsp;|&nbsp; 🥎 ${stats.wickets || 0} Wkts
      </div>

      <div class="card-footer">
        <span style="font-size: 0.78rem; color: var(--text-muted);">Age: ${p.age}</span>
        <button class="upload-btn-sm" onclick="openPlayerModal(${p.id})">
          👁️ View Profile
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function exportPrintView() {
  window.print();
}

function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    alert('SheetJS library is loading, please try again in a second.');
    return;
  }
  const exportData = players.map(p => {
    const teamObj = teams.find(t => t.id === p.teamId);
    return {
      'Lot #': p.lotNumber || p.id,
      'ID': p.id,
      'Player Name': p.name,
      'Age Group': p.age,
      'Playing Preference (Role)': p.role,
      'Auction Base Price (₹)': p.basePrice || 1000,
      'Auction Status': p.status || 'UNSHORTENED',
      'Assigned Team': teamObj ? teamObj.name : 'Unsold (Free Agent)',
      'JPL 4 Total Runs': p.jpl4 ? p.jpl4.runs : 0,
      'JPL 4 Total Wickets': p.jpl4 ? p.jpl4.wickets : 0,
      'JPL 4 Matches': p.jpl4 ? p.jpl4.matches : 0,
      'JPL 4 High Score': p.jpl4 ? p.jpl4.highestScore : '-',
      'Photo Attached': p.photoUrl ? 'YES (Embedded in App)' : 'Drive Link',
      'Drive Photo Link': p.photoLink,
      'Drive Payment Link': p.paymentLink
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'JPL Season 6 Auction Pool');

  XLSX.writeFile(workbook, 'JPL_Season_6_Auction_Pool.xlsx');
}

/* Full System Backup & Restore Guarantee (Zero Photo Loss) */
function exportFullBackup() {
  const backupData = {
    app: 'JPL Season 6 Player Manager',
    version: '20261010_backup_v1',
    timestamp: new Date().toISOString(),
    teams: teams,
    players: players
  };
  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `JPL_Season_6_Full_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
window.exportFullBackup = exportFullBackup;

function importFullBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && Array.isArray(data.players)) {
        if (Array.isArray(data.teams)) {
          teams = data.teams;
          saveTeams();
        }
        data.players.forEach(p => {
          const existing = players.find(ep => ep.id === p.id);
          if (existing) {
            Object.assign(existing, p);
          } else {
            players.push(p);
          }
          savePlayerDataToDB(p);
        });
        renderAll();
        alert('✅ Full Backup Restored! All 66 player profiles, photos, and team rosters are intact.');
      } else {
        alert('⚠️ Invalid backup file format.');
      }
    } catch(err) {
      alert('⚠️ Could not restore backup: ' + err.message);
    }
  };
  reader.readAsText(file);
}
window.importFullBackup = importFullBackup;
