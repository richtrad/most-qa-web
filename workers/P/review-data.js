window.P_REVIEW_DATA = {
  "schema_version": "1.0",
  "worker": "P",
  "street": "Hřbitovní",
  "baseline_version": "P-HRBITOVNI-COLOR-ONLY-20261022",
  "phase": "COLOR_ONLY",
  "overall": {
    "color_only_state": "complete_with_limitations",
    "unique_photo_groups": 3,
    "image_attempts": 6,
    "current_selections": 3,
    "remote_verified_associations": 5,
    "production_decisions_waiting": 0,
    "metadata_review_items_open": 2,
    "street_intro_dating": "uncertain_not_independently_verified",
    "model_available": false,
    "cleanup_performed": false,
    "front_or_mult_created": false
  },
  "cases": [
    {
      "case_id": "P-HRBITOVNI-691-1894-001",
      "title_cs": "Sdílený záběr čp. 691 a 1894 · 001",
      "title_en": "Shared view of house no. 691 and 1894 · 001",
      "source_file": "cp_691,1894_001.jpg",
      "source_asset": "/most-qa-web/media/e7217dd47e3ad10f465a535e42f70785f532ee9c.webp",
      "source_sha256": "2c94817bb343606d8614b2677b465f7d42c211b11d4a627c672ad4fcab156ac2",
      "source_ids": [
        "c0fb3ca6-6fea-43e5-82ae-06b8f6accdb9",
        "3adf46f3-569d-48bf-a4cb-9314af08cdd9"
      ],
      "covered_cps": [
        "691",
        "1894"
      ],
      "mapping_review_required": true,
      "baseline_decision": "Pokus 1 přijat s omezením; pokus 2 odmítnut podle doloženého nálezu.",
      "qa_status": "passed_with_limitations",
      "qa_scope": "historical_COLOR_ONLY_record",
      "limitations_cs": "Výstup má 1509 × 1042 px proti originálu 3127 × 2160 px; jemné větve a zrno jsou měkčí. Pouze provizorní materiálová reference, ne detailní textura ani důkaz hranic fasád.",
      "material_status": "model_hypothesis; provisional; locked=false",
      "group_note_cs": "Záznam přiřazuje sdílenou fotografii k oběma číslům popisným. Přesná hranice jednotlivých fasád není tímto předáním doložena.",
      "selected_variant_id": "attempt01",
      "selected_variant_sha256": "c351af7dad8a08fdefc021a19f1ca29d64e4bf8ea69c76fdd4a9a7ca6db9b159",
      "remote": {
        "state": "verified_by_existing_receipt",
        "remote_sha256": "c351af7dad8a08fdefc021a19f1ca29d64e4bf8ea69c76fdd4a9a7ca6db9b159",
        "attachments": [
          {
            "cp": "691",
            "photo_id": "5134b382-cb0c-4171-a2bd-1ef4351eb57c"
          },
          {
            "cp": "1894",
            "photo_id": "24139d71-cead-4daf-a5e9-efbd68732e8e"
          }
        ]
      },
      "variants": [
        {
          "variant_id": "attempt01",
          "label": "Pokus 1 · přijat s omezením",
          "asset": "/most-qa-web/media/ed067699728bb3ced62808e588bb57a08f034a64.webp",
          "sha256": "c351af7dad8a08fdefc021a19f1ca29d64e4bf8ea69c76fdd4a9a7ca6db9b159",
          "historical_status": "accepted_with_limitations",
          "current_status": "selected_output",
          "reason_status": "not_applicable",
          "rejection_reason": null,
          "finding_cs": "Převzatý QA záznam: hlavní kompozice a objekty zachovány; nižší rozlišení, měkčí zrno a nejjemnější detaily."
        },
        {
          "variant_id": "attempt02",
          "label": "Pokus 2 · historicky odmítnut",
          "asset": "/most-qa-web/media/0beb1a8846a3c8322fd5cb4ca54195bec891dd1f.webp",
          "sha256": "e04cee03b78e232ad900b693a9bfa20309afb93f9835ca6d9e68222ff6040f89",
          "historical_status": "rejected",
          "current_status": "not_selected",
          "reason_status": "recorded",
          "rejection_reason": "Rozlišení 1509 × 1042 px proti originálu 3127 × 2160 px; změkčené zrno a jemné větve přetrvávaly i po jediné opravě.",
          "finding_cs": "Důvod převzat z variantního záznamu; nejde o nové hodnocení."
        }
      ]
    },
    {
      "case_id": "P-HRBITOVNI-691-003",
      "title_cs": "Čp. 691 · 003",
      "title_en": "House no. 691 · 003",
      "source_file": "cp_691_003.jpg",
      "source_asset": "/most-qa-web/media/6f8910b02c83ea891c72bb8e330f25cd82a33c1e.webp",
      "source_sha256": "4cf3e57230ed05ad40c1d81d2efcce23ab4bb049c9860c25433d51116dd581b4",
      "source_ids": [
        "a0cc480a-7021-4627-b8f0-7d771ec1fd2f"
      ],
      "covered_cps": [
        "691"
      ],
      "mapping_review_required": false,
      "baseline_decision": "Pokus 2 výslovně schválil uživatel a byl nahrán; původní štítek rejected zůstává zachován jako historie.",
      "qa_status": "passed_with_limitations",
      "qa_scope": "user_approved_COLOR_ONLY_record",
      "limitations_cs": "Silueta a hustota olistění se liší od originálu a zrno je změkčené. Tyto detaily nejsou důkazem historického stavu vegetace; jen provizorní barevná a materiálová reference.",
      "material_status": "model_hypothesis; provisional; locked=false",
      "group_note_cs": "Dochovaná poznámka pro skupinu uvádí, že dva pokusy změnily sezónní siluetu stromů a změkčily zrno. Poznámka nerozlišuje, který konkrétní nález patřil ke kterému pokusu.",
      "selected_variant_id": "attempt02",
      "selected_variant_sha256": "893147f9747226eabf9ac33daa8fff867daff41aa11977e592d1f73a29b4d969",
      "remote": {
        "state": "verified_by_existing_receipt",
        "remote_sha256": "893147f9747226eabf9ac33daa8fff867daff41aa11977e592d1f73a29b4d969",
        "attachments": [
          {
            "cp": "691",
            "photo_id": "82ccfe0b-789c-44bf-8f06-9c7ab063ec46"
          }
        ]
      },
      "variants": [
        {
          "variant_id": "attempt01",
          "label": "Pokus 1 · historicky odmítnut",
          "asset": "/most-qa-web/media/eaadbd350c25bc8246b04319d0c910d92830d0b2.webp",
          "sha256": "255de5554286baca64cbfdc425395490da942ee1be32458f9a20a85dc662e855",
          "historical_status": "rejected",
          "current_status": "not_selected",
          "reason_status": "not_recorded",
          "rejection_reason": "Původní důvod odmítnutí není doložen",
          "finding_cs": "Dochovaný důvod existuje jen pro skupinu obou pokusů; nelze jej bezpečně přiřadit této variantě."
        },
        {
          "variant_id": "attempt02",
          "label": "Pokus 2 · uživatelem schválen a nahrán",
          "asset": "/most-qa-web/media/5ccf1ef04e0cd67c428e6291ded44287611c82db.webp",
          "sha256": "893147f9747226eabf9ac33daa8fff867daff41aa11977e592d1f73a29b4d969",
          "historical_status": "rejected",
          "current_status": "user_approved_uploaded_with_limitations",
          "reason_status": "not_recorded",
          "rejection_reason": "Původní důvod odmítnutí není doložen",
          "finding_cs": "Pozdější převzaté QA omezení: změněná silueta a hustota olistění, měkčí zrno. Toto není původní důvod odmítnutí konkrétní varianty.",
          "approval_statement": "použij u obou případu pokus 2 a uploaduj to na Libuši. pokusy dva ber jako schválená."
        }
      ]
    },
    {
      "case_id": "P-HRBITOVNI-691-1894-002",
      "title_cs": "Sdílený záběr čp. 691 a 1894 · 002",
      "title_en": "Shared view of house no. 691 and 1894 · 002",
      "source_file": "cp_691,1894_002.jpg",
      "source_asset": "/most-qa-web/media/a862228cc1e11aa26b92730b88a0ee401ee272ca.webp",
      "source_sha256": "10e744052487c4bbb1fc68b824dcccca1e8972855977a7969093e5436c05d8ea",
      "source_ids": [
        "f8eb1be7-ea32-403d-a566-fed50228fc67",
        "41e64fdf-31e5-4171-83fd-15ba62d8f7b5"
      ],
      "covered_cps": [
        "691",
        "1894"
      ],
      "mapping_review_required": true,
      "baseline_decision": "Pokus 2 výslovně schválil uživatel a byl nahrán; původní štítek rejected zůstává zachován jako historie.",
      "qa_status": "passed_with_limitations",
      "qa_scope": "user_approved_COLOR_ONLY_record",
      "limitations_cs": "Tvar kabiny a korby nákladního vozu, lak a označení nejsou spolehlivé detaily vůči předloze; jemné zrno je změkčené. Pouze provizorní barevná a materiálová reference, ne důkaz geometrie vozidla či fasád.",
      "material_status": "model_hypothesis; provisional; locked=false",
      "group_note_cs": "Dochovaná poznámka pro skupinu uvádí změny tvaru/označení vozidla, zrna a rozlišení; konkrétní historický důvod odmítnutí pokusu 2 není doložen.",
      "selected_variant_id": "attempt02",
      "selected_variant_sha256": "2823e0ee8353156118034948af9fd7c614e36368103b7cf7f72dc6064ff5a2ad",
      "remote": {
        "state": "verified_by_existing_receipt",
        "remote_sha256": "2823e0ee8353156118034948af9fd7c614e36368103b7cf7f72dc6064ff5a2ad",
        "attachments": [
          {
            "cp": "691",
            "photo_id": "51d2f9a9-79d8-4765-bbf3-e1d207437a0c"
          },
          {
            "cp": "1894",
            "photo_id": "d27c6328-6384-4755-b20b-fa69bdf61107"
          }
        ]
      },
      "variants": [
        {
          "variant_id": "attempt01",
          "label": "Pokus 1 · review_required",
          "asset": "/most-qa-web/media/2e54fcc9d5ea8ac9c1fced59fc8161b55459a762.webp",
          "sha256": "9f29aa3ae5def87217e470c41cc6db1487062d2195b18d6b934cdb1b91cff5bf",
          "historical_status": "review_required",
          "current_status": "not_selected",
          "reason_status": "not_applicable_not_rejected",
          "rejection_reason": null,
          "finding_cs": "Převzatý stav review_required; varianta nebyla přeznačena na rejected."
        },
        {
          "variant_id": "attempt02",
          "label": "Pokus 2 · uživatelem schválen a nahrán",
          "asset": "/most-qa-web/media/36b7c9785b6852fd60b6c036626a8e432f63168d.webp",
          "sha256": "2823e0ee8353156118034948af9fd7c614e36368103b7cf7f72dc6064ff5a2ad",
          "historical_status": "rejected",
          "current_status": "user_approved_uploaded_with_limitations",
          "reason_status": "not_recorded",
          "rejection_reason": "Původní důvod odmítnutí není doložen",
          "finding_cs": "Pozdější převzaté QA omezení: detaily vozidla a jemné zrno nejsou spolehlivou předlohou. Toto není původní důvod odmítnutí konkrétní varianty.",
          "approval_statement": "použij u obou případu pokus 2 a uploaduj to na Libuši. pokusy dva ber jako schválená."
        }
      ]
    }
  ],
  "other_sources": [
    {
      "source_id": "16b9d768-78eb-45d2-996d-40131a76f731",
      "source_file": "cp_691_001.jpg",
      "asset": "/most-qa-web/media/2b4ae963f2f5b7498299b3fe72445cce6d24098e.webp",
      "sha256": "2d84db38fa7f08b22c6a808c7d948a052b61d6e7c1c3a05ef1f04ac68daf497b",
      "classification": "PHOTO,BW",
      "disposition": "skipped_near_duplicate",
      "reason_cs": "V analýze byla přeskočena jako téměř duplicitní záběr stejného směru a geometrie vůči cp_691_003.jpg."
    },
    {
      "source_id": "940eb825-b345-40d6-80a2-71760dcb71f0",
      "source_file": "cp_691_002.jpg",
      "asset": "/most-qa-web/media/777b2191b225eb81261799e5056be5d37cb1a64c.webp",
      "sha256": "9108fa46ffba1717db392dd7560f4b0260bb9185dfa3a6beac2952bd2715e4b9",
      "classification": "PHOTO,BW",
      "disposition": "skipped_near_duplicate",
      "reason_cs": "V analýze byla přeskočena jako téměř duplicitní záběr stejného směru a geometrie vůči cp_691_003.jpg."
    },
    {
      "source_id": "56c418ff-244b-4457-9e56-f736c4130e5e",
      "source_file": "cp_691_info.jpg",
      "asset": "/most-qa-web/media/06c569375433d4eabffa846f6b6c94fa2883b080.webp",
      "sha256": "249971071d4b80d0aafbefdb6d41e6ccd098129a8a236f961652536d1a2c0c8b",
      "classification_in_inventory": "PHOTO,BW; has_archive_card=false",
      "visual_observation": "Rukopisná informační karta, nikoli fotografická předloha.",
      "disposition": "excluded_from_colorization",
      "reason_cs": "Vyloučena z kolorování, protože jde o informační kartu. Zároveň je zde rozpor s klasifikací ve vstupním inventáři."
    },
    {
      "source_id": "4f014036-0e02-4cac-9142-f840b59dd7d5",
      "source_file": "cp_691,1894_info.jpg",
      "asset": "/most-qa-web/media/382e6bbb37d66efdbaede7abf45cac31195aa707.webp",
      "sha256": "04d9a98569d8b8534ae4ed098c5cee5062a7ff0e588ad375b82a72a4972af397",
      "classification_in_inventory": "PHOTO,BW; has_archive_card=false",
      "visual_observation": "Rukopisná informační karta, nikoli fotografická předloha.",
      "disposition": "excluded_from_colorization",
      "reason_cs": "Vyloučena z kolorování, protože jde o informační kartu. Zároveň je zde rozpor s klasifikací ve vstupním inventáři."
    }
  ],
  "open_reviews": [
    {
      "case_id": "P-HRBITOVNI-INFO-CARD-CLASSIFICATION",
      "title_cs": "Rozpor v inventáři: dvě rukopisné informační karty",
      "title_en": "Inventory mismatch: two handwritten information cards",
      "source_ids": [
        "56c418ff-244b-4457-9e56-f736c4130e5e",
        "4f014036-0e02-4cac-9142-f840b59dd7d5"
      ],
      "source_sha256": [
        "249971071d4b80d0aafbefdb6d41e6ccd098129a8a236f961652536d1a2c0c8b",
        "04d9a98569d8b8534ae4ed098c5cee5062a7ff0e588ad375b82a72a4972af397"
      ],
      "baseline_status": "needs_metadata_reconciliation",
      "finding_cs": "Při vizuální kontrole jsou oba soubory rukopisné karty, zatímco místní inventář uvádí PHOTO,BW a has_archive_card=false. Karty se nekolorovaly. Inventář zůstává beze změny.",
      "choices_cs": [
        {
          "value": "record_cards_after_source_check",
          "label": "Potvrdit, že jde o informační karty; metadata opravit až po dohledání zdrojového záznamu."
        },
        {
          "value": "keep_mismatch_blocked",
          "label": "Ponechat rozpor otevřený do ověření zdrojového záznamu."
        },
        {
          "value": "unsure_blocked",
          "label": "Nevím / ponechat blokované."
        }
      ]
    },
    {
      "case_id": "P-HRBITOVNI-NEAR-DUPLICATES",
      "title_cs": "Ponechat dva blízké duplikáty přeskočené?",
      "title_en": "Keep two near-duplicates skipped?",
      "source_ids": [
        "16b9d768-78eb-45d2-996d-40131a76f731",
        "940eb825-b345-40d6-80a2-71760dcb71f0",
        "a0cc480a-7021-4627-b8f0-7d771ec1fd2f"
      ],
      "source_sha256": [
        "2d84db38fa7f08b22c6a808c7d948a052b61d6e7c1c3a05ef1f04ac68daf497b",
        "9108fa46ffba1717db392dd7560f4b0260bb9185dfa3a6beac2952bd2715e4b9"
      ],
      "baseline_status": "skipped_near_duplicate_recorded",
      "finding_cs": "Dosavadní evidence uvádí stejný směr a geometrii jako cp_691_003.jpg. V této přípravě se neotevírá nová generace; lze pouze ponechat výběr nebo požádat o opětovnou kontrolu výběru.",
      "choices_cs": [
        {
          "value": "keep_skipped",
          "label": "Ponechat vynechání jako blízkých duplikátů."
        },
        {
          "value": "reopen_source_selection_only",
          "label": "Znovu otevřít výběr zdrojové fotografie, bez nové generace."
        },
        {
          "value": "unsure_blocked",
          "label": "Nevím / ponechat blokované."
        }
      ]
    }
  ],
  "receipts": [
    {
      "receipt_file": "P_HRBITOVNI_cp_691_1894_001_20261022T044526Z.json",
      "receipt_sha256": "88030e81212fa094ab0af541e2468e0f3d924782868e04030f49688892ce3b98",
      "operation": "uploaded",
      "qa_status": "passed_with_limitations",
      "remote_sha256_verified": true
    },
    {
      "receipt_file": "P_HRBITOVNI_cp_691_003_attempt02_20261022.json",
      "receipt_sha256": "ff3bf4de6de4f7da7770feb2737424395e865a7c9265b2025b2d7c4ef0802ca0",
      "operation": "uploaded",
      "qa_status": "passed_with_limitations",
      "remote_sha256_verified": true
    },
    {
      "receipt_file": "P_HRBITOVNI_cp_691_1894_002_attempt02_20261022.json",
      "receipt_sha256": "4d7b82b178c3e46d418bee67f6bceb69657a997b0902356f4e654fb86cd3d537",
      "operation": "uploaded",
      "qa_status": "passed_with_limitations",
      "remote_sha256_verified": true
    }
  ],
  "website": {
    "publication_status": "private_staging_only",
    "draft_status": "draft_functional_qa_pending",
    "browser_validation": "not_performed",
    "screenshot_status": "screenshot_pending",
    "application_status": "not_applied"
  }
};