window.LIEBKNECHTOVA_DATA = {
  "schema_version": "1.0.0",
  "worker": "AG",
  "street": "Liebknechtova",
  "package_version": "AG-LBK-2026-10-22-v1",
  "storage_key": "MOST:AG:Liebknechtova:decision:v1",
  "counts": {
    "source_records": 68,
    "unique_source_ids": 68,
    "unique_source_filenames": 48,
    "manifest_jobs": 46,
    "accepted_color_only": 40,
    "human_review_required": 6,
    "excluded_before_generation": 2,
    "attempt_variants": 23,
    "prior_remote_verified_target_links": 58
  },
  "qa_report_totals": {
    "jobs": 46,
    "automatic_passed": 40,
    "visual_qa_recorded": 0,
    "foreground_cleanup_qa_recorded": 11,
    "overall_passed": 0,
    "errors": 6
  },
  "batch_qa_discrepancy": "Individuální receipts: 40 passed_color_only; souhrnný report: visual_qa_recorded=0 a overall_passed=0. Dávka není označena jako celkově prošlá.",
  "color_assignments": {
    "status": "provisional",
    "schema_version": "1.0.0",
    "batch_id": "LIEBKNECHTOVA_AG_COLOR_ONLY_20261022",
    "notes_cs": "Záměrně bez materiálových přiřazení do vizuální kontroly originálů a dobových barevných pramenů. Používat pouze existující material_id z databáze; každý nedoložený odstín zůstává model_hypothesis/provisional/locked:false.",
    "locked": false,
    "location": {
      "street": "Liebknechtova",
      "city": "Most"
    },
    "confidence": "model_hypothesis",
    "entity_assignments": []
  },
  "source_snapshot": {
    "audit_date": "2026-10-22",
    "captured_at": "2026-10-22T06:00:35+02:00",
    "area_public": false,
    "image_republication_rights": "not documented in local receipts"
  },
  "historical_aliases": [
    {
      "to": 0,
      "from": 0,
      "name": "Karla Liebknechta"
    },
    {
      "to": 0,
      "from": 0,
      "name": "Rudolfova"
    },
    {
      "to": 0,
      "from": 0,
      "name": "Bürgermeister Rudolf St."
    },
    {
      "to": 0,
      "from": 0,
      "name": "Bürgermedister Rudolf Strasse"
    },
    {
      "to": 0,
      "from": 0,
      "name": "Rosegerstrasse"
    },
    {
      "to": 0,
      "from": 0,
      "name": "Rayon StB"
    },
    {
      "to": 0,
      "from": 0,
      "name": "Nákladní"
    }
  ],
  "cases": [
    {
      "case_id": "AG-LBK-ato119-10-28-102",
      "case_version": "AG-LBK-v1-e18be1e5a77f79f2",
      "unit_key": "ato119_10_28_102",
      "source_filename": "ATO119_10_28_102.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1216"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "9b65f8eb-39fc-485b-bd4d-3eca0f9ef34b",
          "filename": "ATO119_10_28_102.jpg",
          "sha256": "e18be1e5a77f79f22e8df97b64b1f00cbaf9b19ef4eda4f7e6e43236d12eacc8",
          "bytes": 1261147,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/8200c80138d3e40e5b4760c6a1de6ba09150421a.webp"
        }
      ],
      "accepted_output": {
        "filename": "ATO119_10_28_102_col.png",
        "asset": "/most-qa-web/media/e0f21ef285da3c2257e46049140ac45ef8669e51.webp",
        "sha256": "CB6A3E00EF80F1CE656DE28DF09217E6FE0D24995A34C8679DFFC76F194B16BE",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Same three-storey facade, openings, roofline, damage, wall motif, image frame, grain and foreground grass remain. No foreground object was removed; no hidden area reconstructed. Color/material assignments are provisional hypotheses because no CP 1216-specific assignment was available.",
        "receipt_filename": "ATO119_10_28_102_QA.json",
        "receipt_sha256": "843407c693a872d4a4825f7b9124cd464fed1e946fb1dbde77bcb81b7056dce1"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "ATO119_10_28_102_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_ATO119_10_28_102_col_20261022T052456817261Z.json",
          "receipt_sha256": "082bbfc53620121dbc037734cad9e9ea606ad2f9cc8cc86cfbd4ecc8baf4946a"
        }
      }
    },
    {
      "case_id": "AG-LBK-ato119-10-28-103",
      "case_version": "AG-LBK-v1-b8b8756f441ba6b3",
      "unit_key": "ato119_10_28_103",
      "source_filename": "ATO119_10_28_103.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1216"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "1641106a-274b-460f-9dff-ea04df368bc6",
          "filename": "ATO119_10_28_103.jpg",
          "sha256": "b8b8756f441ba6b35abbbb443753c620e3d409636db49beb9cce2e9592c696b8",
          "bytes": 1185271,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/0bf439b843073291f7b2d45180ba56f6baf647f2.webp"
        }
      ],
      "accepted_output": {
        "filename": "ATO119_10_28_103_col.png",
        "asset": "/most-qa-web/media/a3883f87de4057980bf8704bf8d456ce3eb4fcc6.webp",
        "sha256": "26DBA1B60F9ACD9300275082B11DE36B4BF1897DFBA1859A1BE0879FB5B15122",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Visible facade massing, roof/chimneys, windows/doors, severe plaster loss, exposed brick, foreground ruin, vegetation, frame and perspective are retained. No objects were intentionally removed or added; no hidden-surface reconstruction or cleanup. Material hues are provisional; pixel-level texture/detail variation remains a review limitation.",
        "receipt_filename": "ATO119_10_28_103_QA.json",
        "receipt_sha256": "56c3325412f68e985b5eec75a98f83e1f3589d284b877ae355244a9442223328"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "ATO119_10_28_103_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_ATO119_10_28_103_col_20261022T052509099167Z.json",
          "receipt_sha256": "82ae00fba30ab6dac76d6098b996cdfa4506cb5d7c969d93ec99a580a782ad7f"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1425-001",
      "case_version": "AG-LBK-v1-833990fb18819d63",
      "unit_key": "cp_1425_001",
      "source_filename": "cp_1425_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1425"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "a62540f4-dae9-4b5b-b879-fe205c82b5bd",
          "filename": "cp_1425_001.jpg",
          "sha256": "833990fb18819d63cae90412297a0f7bbf7f367e67f4607426e12842a97aaa2d",
          "bytes": 809009,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/2faa5c5a5ab9e284a10737727a9da1b35861c092.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1425_001_col.png",
        "asset": "/most-qa-web/media/227f93840d2e28384eafde1014f9b366441229d1.webp",
        "sha256": "D0BC2249050E82EB9789D61CB5A83A48117344713D8966CA0C1BA987135A2036",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Building massing, openings, broken areas, roofline, foreground tree, fence, verge and street remain in the same composition. No cleanup or reconstruction observed. Color/material values provisional due to no cp.1425-specific assignment.",
        "receipt_filename": "cp_1425_001_QA.json",
        "receipt_sha256": "374ecac23f6d3646e4ca6c1002c431507983967f293f7caeabbe89792e3f3ed2"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1425_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1425_001_col_20261022T052513899137Z.json",
          "receipt_sha256": "99eef5a038c8fc070a3d4152b8a91f9febd6c54e2292dcf7c38361b572cdea3f"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1425-002",
      "case_version": "AG-LBK-v1-c9f41a51ac9d3974",
      "unit_key": "cp_1425_002",
      "source_filename": "cp_1425_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1425"
      ],
      "status": "human_review_required",
      "decision_needed": true,
      "decision_question": "Porovnej originál a uložené varianty; stav zůstává blokovaný.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Potřebuji další pramen",
          "value": "more_evidence"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "ccc526bf-1a80-419a-a8c0-da11af6759a0",
          "filename": "cp_1425_002.jpg",
          "sha256": "c9f41a51ac9d3974f5776a64772dc5eba8c72c07f9199fc20e6de446eb801987",
          "bytes": 773324,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/c01bb2a02e5ce6d672d635dbb4a7e375d065e255.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        {
          "variant_id": "VAR-cp-1425-002-jpg-A1-F7886EAC709E",
          "filename": "cp_1425_002_attempt1_col.png",
          "asset": "/most-qa-web/media/2059a8bd546883a4b55ed0a055ab2b52eb732db7.webp",
          "source_filename": "cp_1425_002.jpg",
          "source_id": "ccc526bf-1a80-419a-a8c0-da11af6759a0",
          "source_sha256": "C9F41A51AC9D3974F5776A64772DC5EBA8C72C07F9199FC20E6DE446EB801987",
          "sha256": "F7886EAC709E016C5556EBCCE5EB034865ADF3AF3EABB37D76BDCB1667CD3FFD",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Colorization introduced changed camera perspective/composition and invented sky/cloud detail compared with the source. Preserve variant for review; no upload.",
          "reason_cs": "Změnila se perspektiva kamery a kompozice a přibyly mraky.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1425_002_attempt1_QA.json",
          "receipt_sha256": "6fb9090d55ecca1378bcc4e1cf85db908c90178418f87c300d3b1691a1a21f19",
          "later_accepted_output": false
        },
        {
          "variant_id": "VAR-cp-1425-002-jpg-A2-64E6E9D1F09E",
          "filename": "cp_1425_002_attempt2_col.png",
          "asset": "/most-qa-web/media/1aabd4510d1afa30870294b948bc8d9a8ec178d8.webp",
          "source_filename": "cp_1425_002.jpg",
          "source_id": "ccc526bf-1a80-419a-a8c0-da11af6759a0",
          "source_sha256": "C9F41A51AC9D3974F5776A64772DC5EBA8C72C07F9199FC20E6DE446EB801987",
          "sha256": "64E6E9D1F09E397704FAF3AFC92C14A12CA907B2885EBF09541A1E6D70226941",
          "attempt": 2,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Second variant still shifts/reinterprets facade geometry and camera perspective relative to source. Both attempts retained for human review; no further automated repair.",
          "reason_cs": "Druhý pokus stále mění geometrii průčelí a perspektivu.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1425_002_attempt2_QA.json",
          "receipt_sha256": "e0a3688b8b7a10e3daf8503e6853409d24f6a172dc0ad429cb7391e994d8bc90",
          "later_accepted_output": false
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "rejected",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1425_002_attempt2_QA.json",
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-1425-003",
      "case_version": "AG-LBK-v1-e8f3edde6e02f483",
      "unit_key": "cp_1425_003",
      "source_filename": "cp_1425_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1425"
      ],
      "status": "human_review_required",
      "decision_needed": true,
      "decision_question": "Porovnej originál a uložené varianty; stav zůstává blokovaný.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Potřebuji další pramen",
          "value": "more_evidence"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "838d91dc-70bd-48b3-aecb-3dd5fe0f7eb1",
          "filename": "cp_1425_003.jpg",
          "sha256": "e8f3edde6e02f483ce7445da1e36a804e28ae317a183e26d3c6ba330b351ad2a",
          "bytes": 951385,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/177ab7c075b88153bcabd229488c4b979352b8ab.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        {
          "variant_id": "VAR-cp-1425-003-jpg-A1-92860B361CB8",
          "filename": "cp_1425_003_attempt1_col.png",
          "asset": "/most-qa-web/media/944f4d0d7e64aaf0623c998672b0a3b074ebbb66.webp",
          "source_filename": "cp_1425_003.jpg",
          "source_id": "838d91dc-70bd-48b3-aecb-3dd5fe0f7eb1",
          "source_sha256": "E8F3EDDE6E02F483CE7445DA1E36A804E28AE317A183E26D3C6BA330B351AD2A",
          "sha256": "92860B361CB812501C3DD7B34E573E0AA5E1B8B77A4F59676066685877C92962",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: output changes the source viewpoint/framing and invents a roof dormer; facade opening positions and ground arrangement are reinterpreted. Retained as a rejected variant. No upload.",
          "reason_cs": "Změnil se úhel a výřez, přibyl vikýř a změnily se otvory i terén.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1425_003_attempt1_QA.json",
          "receipt_sha256": "b3d61feec92d8aa3997dc136a80567fb6d0a0ccd1baf69c9c558095ea6895bb4",
          "later_accepted_output": false
        },
        {
          "variant_id": "VAR-cp-1425-003-jpg-A2-F038341EF91A",
          "filename": "cp_1425_003_attempt2_col.png",
          "asset": "/most-qa-web/media/e8e19c9f3bf08ad2d6091eb33d795499bf610d04.webp",
          "source_filename": "cp_1425_003.jpg",
          "source_id": "838d91dc-70bd-48b3-aecb-3dd5fe0f7eb1",
          "source_sha256": "E8F3EDDE6E02F483CE7445DA1E36A804E28AE317A183E26D3C6BA330B351AD2A",
          "sha256": "F038341EF91A230674D844C0DFCB3211E8CAE21E8334A28941FBECE73B9B74A0",
          "attempt": 2,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected after second attempt: the output repeats the changed viewpoint/building orientation and altered façade/ground details; two attempts exhausted. Both variants retained for human review. No upload.",
          "reason_cs": "Druhý pokus opakuje změněný úhel a mění průčelí i terén.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1425_003_attempt2_QA.json",
          "receipt_sha256": "9788d9be03d5753ee1c74a7d8c6472df43740f961a8519ccd655acaae9795112",
          "later_accepted_output": false
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "rejected",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1425_003_attempt2_QA.json",
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-1503-1504-001",
      "case_version": "AG-LBK-v1-72dd3a39f69dd765",
      "unit_key": "cp_1503,1504_001",
      "source_filename": "cp_1503,1504_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1503",
        "1504"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "4f447847-158e-42c6-beef-94a7c32d892b",
          "filename": "cp_1503,1504_001.jpg",
          "sha256": "72dd3a39f69dd7652569b95435be4cadc2c08fda1bfcba98a81fdebf4952df32",
          "bytes": 732884,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/bdad87e41f9340bab4468c484f8fd0eb5699a566.webp"
        },
        {
          "source_id": "489217ec-5829-420c-b550-2f43145c1ec3",
          "filename": "cp_1503,1504_001.jpg",
          "sha256": "72dd3a39f69dd7652569b95435be4cadc2c08fda1bfcba98a81fdebf4952df32",
          "bytes": 732884,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/bdad87e41f9340bab4468c484f8fd0eb5699a566.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1503,1504_001_col.png",
        "asset": "/most-qa-web/media/8a279828248c1f78cc5f60d638fd449a53393bb6.webp",
        "sha256": "43936E64703D41DC6178ECEC330B1BD10B9C10D696230FAF5FCE2826536BDE86",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Street perspective, rowhouse massing and roof/gables, blank gable wall, openings, fences, utility poles, bare trees, road, tire marks, distant objects, border and composition remain. No intentional additions/removals or reconstruction; fine façade texture has been color-interpreted and is provisional.",
        "receipt_filename": "cp_1503,1504_001_QA.json",
        "receipt_sha256": "503686875e825d465f76dc8cbb0caf51d117fea24ba6c7709168b48e441f3dd1"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1503,1504_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1503_1504_001_col_20261022T052519609975Z.json",
          "receipt_sha256": "10bdc7119477d29567950b4aff8e43e5257c0fe8f956ad95086973dcbee2a325"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1503-1504-002",
      "case_version": "AG-LBK-v1-40279f71d49c17e5",
      "unit_key": "cp_1503,1504_002",
      "source_filename": "cp_1503,1504_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1503",
        "1504"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "c2b099cc-a3bd-42bb-96c5-d4fbc1269ba9",
          "filename": "cp_1503,1504_002.jpg",
          "sha256": "40279f71d49c17e5bb58013b20e5be4054650677e529f07b1da973aef5f620ab",
          "bytes": 1051049,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/a317ca577633640f645f4f333af142304f106948.webp"
        },
        {
          "source_id": "9993eb4b-8cac-449f-a81a-06cff99616f3",
          "filename": "cp_1503,1504_002.jpg",
          "sha256": "40279f71d49c17e5bb58013b20e5be4054650677e529f07b1da973aef5f620ab",
          "bytes": 1051049,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/a317ca577633640f645f4f333af142304f106948.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1503,1504_002_col.png",
        "asset": "/most-qa-web/media/e486e7cf2d975f3f1715cb91dd9453372893cfb0.webp",
        "sha256": "F0CE7EC000F5DDC6C3AFE6B6974A642B092F6207AC18C64DA1902C79799915C8",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Courtyard façade massing, opening distribution, doors, damaged plaster/exposed masonry, grass, paths, foreground posts, visible courtyard person/object, frame and perspective remain. Color interpretation of weathering and masonry texture is provisional; no intentional cleanup or reconstruction.",
        "receipt_filename": "cp_1503,1504_002_QA.json",
        "receipt_sha256": "fc3e74577c7b5a3cedc8c641604b70d75a33c5d4505d7f4338c7978ca4a41ac1"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1503,1504_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1503_1504_002_col_20261022T052525558577Z.json",
          "receipt_sha256": "692b526599484110f58f657b601bef6652ca783154b0828a9625070ad8bd7de5"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1503-1504-003",
      "case_version": "AG-LBK-v1-42ac151000705eb8",
      "unit_key": "cp_1503,1504_003",
      "source_filename": "cp_1503,1504_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1503",
        "1504"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "83784c10-d61a-4ca8-a1d4-75af97d218a4",
          "filename": "cp_1503,1504_003.jpg",
          "sha256": "42ac151000705eb88625329b260d1ece89fac7e57d0e36cbee9b1b8be42ce986",
          "bytes": 947916,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6bafa4ad627c757f733e20958530787ba8c7fa7c.webp"
        },
        {
          "source_id": "1e9b98f6-99bb-499b-b031-f5768454aaec",
          "filename": "cp_1503,1504_003.jpg",
          "sha256": "42ac151000705eb88625329b260d1ece89fac7e57d0e36cbee9b1b8be42ce986",
          "bytes": 947916,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6bafa4ad627c757f733e20958530787ba8c7fa7c.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1503,1504_003_col.png",
        "asset": "/most-qa-web/media/4b92667affdb527689983f99f82ea1f9ff5b6448.webp",
        "sha256": "B6C930158419F7019FE6CB55470820C646F8DEC2F19A384BF15DA3446417DFB1",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Rowhouse street façade massing, blank end wall, gables, roofline, windows/doors, fences, two foreground people, road marks, frame and perspective remain. Material hues and brick/plaster microtexture are provisional. No intentional additions/removals, cleanup or reconstruction.",
        "receipt_filename": "cp_1503,1504_003_QA.json",
        "receipt_sha256": "28c48c3ba202414b837001f52338e6a0712c582931c8af556d7155344f6b04b5"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1503,1504_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1503_1504_003_col_20261022T052535976669Z.json",
          "receipt_sha256": "c30588729aa7533c052327db378e8c117ac03c97f4b5e2fe75b800efd6823c6f"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1503-001",
      "case_version": "AG-LBK-v1-f4ffc4febeef7491",
      "unit_key": "cp_1503_001",
      "source_filename": "cp_1503_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1503"
      ],
      "status": "human_review_required",
      "decision_needed": true,
      "decision_question": "Porovnej originál a uložené varianty; stav zůstává blokovaný.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Potřebuji další pramen",
          "value": "more_evidence"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "1f191eec-531e-45ec-9f33-30a7290e8bc8",
          "filename": "cp_1503_001.jpg",
          "sha256": "f4ffc4febeef7491ce41b2eba260b220b14265af0655f1bd90f089b62ad8dadc",
          "bytes": 939467,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/b678b15c9df5fd5546db6514489576215e7661fe.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        {
          "variant_id": "VAR-cp-1503-001-jpg-A1-2C5BD8F262D0",
          "filename": "cp_1503_001_attempt1_col.png",
          "asset": "/most-qa-web/media/232c888de2367ebceca4d7c914c0d5ccb01d1852.webp",
          "source_filename": "cp_1503_001.jpg",
          "source_id": "1f191eec-531e-45ec-9f33-30a7290e8bc8",
          "source_sha256": "F4FFC4FEBEEF7491CE41B2EBA260B220B14265AF0655F1BD90F089B62AD8DADC",
          "sha256": "2C5BD8F262D022EB2CB31F063CE34E64391418ED7FD14E4A853426AFFCEAE2FF",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Variant changes facade/window geometry and adds/reinterprets details; source arrangement is not preserved. Retained for review.",
          "reason_cs": "Změnila se geometrie průčelí a oken a přibyly detaily.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1503_001_attempt1_QA.json",
          "receipt_sha256": "ef21b7221cee28363828309dbd5be3df6630220d14158e88132b5ac764c54a40",
          "later_accepted_output": false
        },
        {
          "variant_id": "VAR-cp-1503-001-jpg-A2-C78E4CE21449",
          "filename": "cp_1503_001_attempt2_col.png",
          "asset": "/most-qa-web/media/3be645b0d0f5fc4792d436adcd0b469e75ea02e8.webp",
          "source_filename": "cp_1503_001.jpg",
          "source_id": "1f191eec-531e-45ec-9f33-30a7290e8bc8",
          "source_sha256": "F4FFC4FEBEEF7491CE41B2EBA260B220B14265AF0655F1BD90F089B62AD8DADC",
          "sha256": "C78E4CE21449A5023EAEC38CA44DE451CEE6982564287A452D7BF678F62B7CFA",
          "attempt": 2,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Second variant still materially changes window/opening layout relative to source. Both variants preserved for human review; no further automated attempt.",
          "reason_cs": "Druhý pokus stále mění rozmístění oken a otvorů.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1503_001_attempt2_QA.json",
          "receipt_sha256": "d5dda760e4a5fa537821b40021c50dbd409b15c83f574fc8d4eae4a72a383053",
          "later_accepted_output": false
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "rejected",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1503_001_attempt2_QA.json",
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-1504-001",
      "case_version": "AG-LBK-v1-8214234ad98b233c",
      "unit_key": "cp_1504_001",
      "source_filename": "cp_1504_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1504"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "850aa8e8-43a6-41dd-83ed-1abd75140197",
          "filename": "cp_1504_001.jpg",
          "sha256": "8214234ad98b233caafc0f1b3092a5b4bc51ce68715c5783910aed6379e7f600",
          "bytes": 964514,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/0fe3d9a8ffc0cfe4d7079880243cdc357d21c6b0.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1504_001_col.png",
        "asset": "/most-qa-web/media/420fd54f99cf2a345be6725e111d73761b5ce3db.webp",
        "sha256": "94335C939FF2EDA2EE309EC44D01B18262D997AE7485AF14CD53C04B89ABFFBD",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Courtyard building masses, roofs, visible window/door positions, lower openings, façade damage, grass, path, utility poles and wire, distant vehicle, frame and perspective remain. Fine weathering and material hues are provisional color interpretation; no intentional cleanup or reconstruction.",
        "receipt_filename": "cp_1504_001_QA.json",
        "receipt_sha256": "94b8ae7841b63ce49f928540949fe997d394f1642e682396238610673aa2dce1"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1504_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1504_001_col_20261022T052542489877Z.json",
          "receipt_sha256": "5855e513bd99f6bbe2385ea739b715c26b91301a11ed551cf8309d851103aca8"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1691-001",
      "case_version": "AG-LBK-v1-d95b2b01b07fa9eb",
      "unit_key": "cp_1691_001",
      "source_filename": "cp_1691_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1691"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "3de18ca3-9d9f-4c8d-b81d-49210f1131b3",
          "filename": "cp_1691_001.jpg",
          "sha256": "d95b2b01b07fa9eb18889b08617e8b8388a45e99a57a4337fc6d0f4801ff991f",
          "bytes": 954461,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/0e16d1e13999655c9a4bc5d3d5a26d263a2902e0.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1691_001_col.png",
        "asset": "/most-qa-web/media/b1bf618279402779ae6c41baab31b17a798c611b.webp",
        "sha256": "9B937B5D611B9BD49EA1EF712D83D6F7474113A02F2736BB088DDF6B4EAAE417",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Facade form, roof, four visible upper/lower window positions, damage, fence, tree line, pole and foreground remain in the same framing. No cleanup or hidden-surface reconstruction. Plaster, masonry, roof and timber colors are provisional model hypotheses.",
        "receipt_filename": "cp_1691_001_QA.json",
        "receipt_sha256": "037abaef09f528604e01f9eaff1e4ead0ef9c4459bbf31284ea94a6d73232f00"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1691_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1691_001_col_20261022T052547180253Z.json",
          "receipt_sha256": "79cd4093200bb5d21b400d28c91ce1084bcac7c404cdf22292b394a6fa06fd26"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1691-002",
      "case_version": "AG-LBK-v1-70c1fff5e41610c4",
      "unit_key": "cp_1691_002",
      "source_filename": "cp_1691_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1691"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "88a378e4-0729-4062-932f-585701b1a131",
          "filename": "cp_1691_002.jpg",
          "sha256": "70c1fff5e41610c4dac68b3fa34102c08287e0a404ebb978b9c691342735f4b4",
          "bytes": 726070,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/0c7f12a81ecf2f21de0d975e7eb0bf2e39ad30a1.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1691_002_col.png",
        "asset": "/most-qa-web/media/918c64e59aa40571d5d3328166d5ba958f2c87f5.webp",
        "sha256": "3FE3BD07AB5013AB944880FC9E1CB1707602A77C884EDEBFCD9CA4BD1084647D",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Small house massing, roof and central gable, chimney/antenna, visible windows, fence lattice, foreground wall/gate and bins, road and background trees/buildings are retained in composition. No cleanup or hidden-area reconstruction; material hues remain provisional.",
        "receipt_filename": "cp_1691_002_QA.json",
        "receipt_sha256": "0132c5d3b71191ed1f2d432241902f286c521e288bc31b0f68ccd17583d850fb"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1691_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1691_002_col_20261022T052551973739Z.json",
          "receipt_sha256": "8c8a55febb9a387c5a3354a91d02891cad1ed94a86454c8e0ded74b59b8f765e"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1691-003",
      "case_version": "AG-LBK-v1-45c5e3c563435b80",
      "unit_key": "cp_1691_003",
      "source_filename": "cp_1691_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1691"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "c7edcf94-2aa3-486e-ab8e-138c31d0daec",
          "filename": "cp_1691_003.jpg",
          "sha256": "45c5e3c563435b80dbf0017de607ce352874c5407c91310fa2c1178bd251ddf2",
          "bytes": 707362,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6126a3d8a1923381eb45bf70ef4fba2fd750ddd5.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1691_003_col.png",
        "asset": "/most-qa-web/media/ccf088fed7d60ce83c015357c998a8f2c57fd239.webp",
        "sha256": "28D85B2400D4188CFD475A54889F5EB374E23F81748E03A88573EAB0FF4CED5F",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt retains house massing, roof/vent, window/door layout, barrier, steps, grate, paths, and vegetation placement without the added flowers from attempt 1. No cleanup or hidden-surface reconstruction. Material hues are provisional.",
        "receipt_filename": "cp_1691_003_QA.json",
        "receipt_sha256": "1cfd5f84a13dff551997ba8dcb8770b90432cc7cf09927da12b0baa8bec6e725"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1691-003-jpg-A1-DBBDEA5A5C4E",
          "filename": "cp_1691_003_attempt1_col.png",
          "asset": "/most-qa-web/media/d27d000f800734e1be410739d287c7470a1b413a.webp",
          "source_filename": "cp_1691_003.jpg",
          "source_id": "c7edcf94-2aa3-486e-ab8e-138c31d0daec",
          "source_sha256": "45C5E3C563435B80DBF0017DE607CE352874C5407C91310FA2C1178BD251DDF2",
          "sha256": "DBBDEA5A5C4E404FEFF0AE78917C6B5B713BF990C8DEDB0C5D0C73869F416970",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: output added pink flowers at the foundation, absent from the source. Variant preserved; one allowed second attempt remains. No upload.",
          "reason_cs": "Přibyly růžové květy u soklu, které ve zdroji nejsou.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1691_003_attempt1_QA.json",
          "receipt_sha256": "cb1e3ea5f0d5451d8a5c0c01dc18dafff31fdd338b7ec683b79cc16e95177d5b",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1691_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1691_003_col_20261022T052601315508Z.json",
          "receipt_sha256": "7cee9df667c7123d4d1b817b56521043007c91393118bb6e984abe668422861c"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1691-004",
      "case_version": "AG-LBK-v1-f8549060ce9677b4",
      "unit_key": "cp_1691_004",
      "source_filename": "cp_1691_004.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1691"
      ],
      "status": "human_review_required",
      "decision_needed": true,
      "decision_question": "Porovnej originál a uložené varianty; stav zůstává blokovaný.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Potřebuji další pramen",
          "value": "more_evidence"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "edd58cad-9550-4163-9191-9b9d37c691fd",
          "filename": "cp_1691_004.jpg",
          "sha256": "f8549060ce9677b4af70580dcc8899a3d61b84b694c9c09f6232b78ccc31cb3c",
          "bytes": 718733,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/1f9f4c95abf708b32c42994a67944957579e1c76.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        {
          "variant_id": "VAR-cp-1691-004-jpg-A1-C5D58EBFB6A0",
          "filename": "cp_1691_004_attempt1_col.png",
          "asset": "/most-qa-web/media/71c89068c717fa3b4ed2407f7a5c0f5b4c4aee03.webp",
          "source_filename": "cp_1691_004.jpg",
          "source_id": "edd58cad-9550-4163-9191-9b9d37c691fd",
          "source_sha256": "F8549060CE9677B4AF70580DCC8899A3D61B84B694C9C09F6232B78CCC31CB3C",
          "sha256": "C5D58EBFB6A0A60B1D52EFC6659C3EE12862609EDB3F5BB05836F9148BDEEB43",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: two visible source bins in front of the left outbuilding were omitted. Variant preserved; one allowed second attempt remains. No upload.",
          "reason_cs": "Chyběly dvě popelnice před levou vedlejší stavbou.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1691_004_attempt1_QA.json",
          "receipt_sha256": "2dddb8b89284748a1cda3a313ea341335634c87a315337798b1d2dac589ace84",
          "later_accepted_output": false
        },
        {
          "variant_id": "VAR-cp-1691-004-jpg-A2-30FD23CE057A",
          "filename": "cp_1691_004_attempt2_col.png",
          "asset": "/most-qa-web/media/c6921d6803de916225a6d50a61a59749b187800f.webp",
          "source_filename": "cp_1691_004.jpg",
          "source_id": "edd58cad-9550-4163-9191-9b9d37c691fd",
          "source_sha256": "F8549060CE9677B4AF70580DCC8899A3D61B84B694C9C09F6232B78CCC31CB3C",
          "sha256": "30FD23CE057A002E65AFD0405052282535167ABE9336CB674F130C81D54DAF14",
          "attempt": 2,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected after second attempt: although both source bins are now present, the output adds laundry on the fence absent from the original. Attempts exhausted; preserve both variants for human review. No upload.",
          "reason_cs": "Na plot přibylo prádlo, které na předloze není.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1691_004_attempt2_QA.json",
          "receipt_sha256": "38ed204f767613cfb4cb9c1e1ea824093e86a9f3960733e769f24e0dbb94a1e3",
          "later_accepted_output": false
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "rejected",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1691_004_attempt2_QA.json",
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-1692-001",
      "case_version": "AG-LBK-v1-9db34b130f940259",
      "unit_key": "cp_1692_001",
      "source_filename": "cp_1692_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1692"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "f523fce6-9097-4447-a42a-6b407623bba1",
          "filename": "cp_1692_001.jpg",
          "sha256": "9db34b130f940259d71113225d7a12a5ec36d33480c2d543be229f7626bd300d",
          "bytes": 540003,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/20fb16666cff6f900823e554825588516d62b10c.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1692_001_col.png",
        "asset": "/most-qa-web/media/09542dff42d29d4db3e16dc61e9d59bc7c88d2c4.webp",
        "sha256": "AB6CEB7CC967CA0009A9D13FD2C03CC7F83B1744DBE02B734115B22A847AFFDC",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Corner massing, gable and hip roof forms, windows, damaged walls, foreground leafless tree, fences/gates and pillars, road and background buildings are retained. No cleanup or hidden-surface reconstruction; hues are provisional.",
        "receipt_filename": "cp_1692_001_QA.json",
        "receipt_sha256": "ef3b0acf024b829ec1c6d21f1d0387490fd144e97c4bedc9be38e641a9580140"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1692_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1692_001_col_20261022T052606461335Z.json",
          "receipt_sha256": "26ba49fc363d7157d370d6fdcb26e8eddc82aed47f7e477192dbce3ee42d826a"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1692-002",
      "case_version": "AG-LBK-v1-b5275c1dbdee9375",
      "unit_key": "cp_1692_002",
      "source_filename": "cp_1692_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1692"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "87628947-0490-4b61-94da-e46debde7c0a",
          "filename": "cp_1692_002.jpg",
          "sha256": "b5275c1dbdee9375491b2bb2afeefc773eed30b9a91ef2dd18e4b09fb134f03a",
          "bytes": 708093,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/ec5e75d1886e8b4c5fe629ee97afac9f68f07587.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1692_002_col.png",
        "asset": "/most-qa-web/media/14f0b82ad5a71b8d56f0ea5d2ba297f45182dc25.webp",
        "sha256": "A073A5281E2D2F806401747653F6D74A10602034E4E0DFB45379458EED402B25",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "House corner massing, hip roof/chimney/vents, openings, steps, rubble, grass/path and background tree, fence and adjacent buildings remain. No cleanup or reconstruction; all material hues provisional.",
        "receipt_filename": "cp_1692_002_QA.json",
        "receipt_sha256": "e06d1b3022c0e669ec901cf0ca9864814a852aa8162991d84c69dee4dd94f3d0"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1692_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1692_002_col_20261022T052611638606Z.json",
          "receipt_sha256": "c667abd7a36f2adc5c2d1657840902d43e6e812cd16f9b11cf500c357628228d"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1692-003",
      "case_version": "AG-LBK-v1-e1307cb240d90998",
      "unit_key": "cp_1692_003",
      "source_filename": "cp_1692_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1692"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "f47437e5-f5b2-4382-8dd8-38a49bab8474",
          "filename": "cp_1692_003.jpg",
          "sha256": "e1307cb240d90998d8d59b28bab4f0b82dc30827e8a166a625deb950afad01e9",
          "bytes": 709723,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/77827a7ca92cc2ca6b91bd92707b936057f1c3f9.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1692_003_col.png",
        "asset": "/most-qa-web/media/ea23e1148d8d21f4dfd86ec5ab36afa9c594a613.webp",
        "sha256": "C32A43BFFE62D974506882D298C24C92C71D92D27B6FA1B8401133CA51E438C6",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "House corner massing, roof and vents, windows/doors, foreground tree branches/occlusion, grass, scattered boards/debris, adjacent wall, frame and perspective remain. Second attempt introduces no conspicuous sill plant seen in attempt 1. Material hues provisional; no cleanup/reconstruction.",
        "receipt_filename": "cp_1692_003_QA.json",
        "receipt_sha256": "abf8478cb55245a830d77d627170614aa651195d7e7350b33e962586a6724bd7"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1692-003-jpg-A1-EA9E4DC30609",
          "filename": "cp_1692_003_attempt1_col.png",
          "asset": "/most-qa-web/media/fa12ea7b32a248659cf36f8cb43653ff56abdc29.webp",
          "source_filename": "cp_1692_003.jpg",
          "source_id": "f47437e5-f5b2-4382-8dd8-38a49bab8474",
          "source_sha256": "E1307CB240D90998D8D59B28BAB4F0B82DC30827E8A166A625DEB950AFAD01E9",
          "sha256": "EA9E4DC30609406923122AF53F02F639DB9F5EABFCF0C1214EC6378C6F0839FF",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: added a green potted plant at the large upper window, not visible in the source. Variant preserved; one second attempt remains. No upload.",
          "reason_cs": "U okna přibyla květina, kterou zdroj nedokládá.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1692_003_attempt1_QA.json",
          "receipt_sha256": "925849d76ed9af6b39e3fe424c4e9371292aaece0121386f8a302f691d37824f",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1692_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1692_003_col_20261022T052616444782Z.json",
          "receipt_sha256": "b6e4b3488c4203ac68a93ca67abf38a80e8caf8f375c3574038339c2a409bf63"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1692-004",
      "case_version": "AG-LBK-v1-56f5d8bedd4d7d47",
      "unit_key": "cp_1692_004",
      "source_filename": "cp_1692_004.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1692"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "fc500599-7a7c-44bb-b1a8-3ff95c656d8b",
          "filename": "cp_1692_004.jpg",
          "sha256": "56f5d8bedd4d7d47b6342100124b6bbd319d5c953cb087d08306c9c6b4277275",
          "bytes": 741591,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/e8e8432f33ff6e22e2653b7ee714c37eeb5291c5.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1692_004_col.png",
        "asset": "/most-qa-web/media/0301f447d10b8538ced25268813093bc4230863d.webp",
        "sha256": "9A791EA0B32782C170B4EBE411928ADD97398159D08A2D0501CCBEDE25054322",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt keeps the source bare trees, wall/garage forms, damage, gates, rubble and paving in place. Attempt 1 with added leaves remains separately rejected. Surface-level color interpretation has textural variation; hues provisional.",
        "receipt_filename": "cp_1692_004_QA.json",
        "receipt_sha256": "25e4b4a282e665ea0312c614fb6480bb9dbee6a3a35a079a4bc3b7a7a6109a09"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1692-004-jpg-A1-653D236D91D3",
          "filename": "cp_1692_004_attempt1_col.png",
          "asset": "/most-qa-web/media/a99d6a943dc01337a7e82d32a453fafcfb057f7e.webp",
          "source_filename": "cp_1692_004.jpg",
          "source_id": "fc500599-7a7c-44bb-b1a8-3ff95c656d8b",
          "source_sha256": "56F5D8BEDD4D7D47B6342100124B6BBD319D5C953CB087D08306C9C6B4277275",
          "sha256": "653D236D91D313D6BB6B73CD3270147BD0827DA663E2C5E98E40EC3CA80ABE95",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: bare background trees in the source gained leaves in the output. Variant preserved; one final attempt remains. No upload.",
          "reason_cs": "Holé stromy v pozadí dostaly listí.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1692_004_attempt1_QA.json",
          "receipt_sha256": "d6ee0cce1b12ae7fcb2d5d2937c5935eca1e8738ccdf6e16ac100b0eee2f7910",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1692_004_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1692_004_col_20261022T052626579072Z.json",
          "receipt_sha256": "3c2251b7682d528347827588032a3c3da0a58dd7627e01c0718cd9a88c422b4a"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1813-001",
      "case_version": "AG-LBK-v1-a711637b5f922294",
      "unit_key": "cp_1813_001",
      "source_filename": "cp_1813_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1813"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "0bd3a1cc-0bac-43c7-bdfb-197c3511510c",
          "filename": "cp_1813_001.jpg",
          "sha256": "a711637b5f92229461cf5775989ca13b1fad596cb5d78efd4a2680bf63ede047",
          "bytes": 772117,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/67c9f72a7d6ee92d5302b67662288f86b12621eb.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1813_001_col.png",
        "asset": "/most-qa-web/media/c16f45a2104402174a20e972cb3c524ccff83785.webp",
        "sha256": "77C37CD0D0C4DA18E5E3E6FCCD12B0DBB4E05EC04BA867EC4B32DC8FD77F87E2",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt retains blank sky, existing demolition silhouette, openings, rubble, timbers, foreground cart, bare trees and composition. First attempt with clouds is separately rejected. No reconstruction or cleanup; colors provisional.",
        "receipt_filename": "cp_1813_001_QA.json",
        "receipt_sha256": "84c0407c63423b9c992a1b71f31b5dd269e256b291aaa58c5cb2bca1fb9a4fb3"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1813-001-jpg-A1-750FF3231A0E",
          "filename": "cp_1813_001_attempt1_col.png",
          "asset": "/most-qa-web/media/bc519521992efef1810f8a285507b2113d841a76.webp",
          "source_filename": "cp_1813_001.jpg",
          "source_id": "0bd3a1cc-0bac-43c7-bdfb-197c3511510c",
          "source_sha256": "A711637B5F92229461CF5775989CA13B1FAD596CB5D78EFD4A2680BF63EDE047",
          "sha256": "750FF3231A0E7B9DFEF97A4D5DC182D13CBE1CBE4236E0CC8A3C4CC96098205A",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: introduced cloud forms in the clear source sky and strengthened/reinterpreted demolition details. Variant retained; one final attempt remains. No upload.",
          "reason_cs": "Do čisté oblohy přibyly mraky a změnily se detaily demolice.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1813_001_attempt1_QA.json",
          "receipt_sha256": "599e2caa54a37fa603df35e836d334c2b27adf8a02fe535147f4bc1823660b9d",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1813_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1813_001_col_20261022T052631157653Z.json",
          "receipt_sha256": "6a2aa42ec2dbc7005010fc4a4dc8f408904d6a551b02d19907a9417d80687c6f"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1813-002",
      "case_version": "AG-LBK-v1-8e001d860ac37bc8",
      "unit_key": "cp_1813_002",
      "source_filename": "cp_1813_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1813"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "b74e141b-6518-4f28-bfa6-54c4a01b11af",
          "filename": "cp_1813_002.jpg",
          "sha256": "8e001d860ac37bc8739ef4c429ba92c403b5e10f37b1f73e55ba6649e9f23308",
          "bytes": 836244,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/ad6c471a8adfd1f8fcc7cdd0dbd04f7be00a5483.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1813_002_col.png",
        "asset": "/most-qa-web/media/7fab8d6f5c53bb56fcb3dddd68b840cd5f89716d.webp",
        "sha256": "2D232985DF86F7AAFABCACFC8C802E43CEAC63B920DE3B272BE133EF3CAE4A56",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "House and roof massing, visible openings/damage, foreground demolition debris, bare tree branches, fence/posts, adjacent buildings, frame and perspective remain. No cleanup or reconstruction; material hues remain provisional.",
        "receipt_filename": "cp_1813_002_QA.json",
        "receipt_sha256": "213c2be12f25a905c8406f61a69d917851aa73959a1874bf98f9b1e264dbf726"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1813_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1813_002_col_20261022T052636585193Z.json",
          "receipt_sha256": "0ad28067fdd36d908f5cd24e9b73f9c47507e96d7590ef73309d7e6dccf1d39c"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1813-003",
      "case_version": "AG-LBK-v1-0ec6f6d88d189238",
      "unit_key": "cp_1813_003",
      "source_filename": "cp_1813_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1813"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "412b0a2f-59ee-4b9a-8d18-6e809ac6986d",
          "filename": "cp_1813_003.jpg",
          "sha256": "0ec6f6d88d189238a53f08baaf0f9fcd4b5711ab6c1f19ca80c142f51ec971ce",
          "bytes": 762193,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/7abd0ebabacdae77c1954c1ced9c7bc131befb87.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1813_003_col.png",
        "asset": "/most-qa-web/media/55ba964dd3653d16f4107e5a18b38b0c84947225.webp",
        "sha256": "7491A62FA6FDCD3EDB31445CF1CBC68D8C23FEC3B9296E9DEBDADD5AEB8BADAB",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Demolition walls/openings, broken masonry, timbers, rubble, bare tree and foreground branches, posts/fence and standing house fragment remain. No additions/removals or cleanup noted; colors provisional.",
        "receipt_filename": "cp_1813_003_QA.json",
        "receipt_sha256": "ce2066d8d32a20fdef488906e87022e6cfb18b935e97ebd3f5a6e14515ff9790"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1813_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1813_003_col_20261022T052641449770Z.json",
          "receipt_sha256": "dc57c71c9e0d43a40fb87b02794a867a5cde684cb6c884cbf43a381bc3b80cb3"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1824-001",
      "case_version": "AG-LBK-v1-df69302b02b6e7a8",
      "unit_key": "cp_1824_001",
      "source_filename": "cp_1824_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1824"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "34a19bb7-0f09-4583-b4a3-632be3d698a4",
          "filename": "cp_1824_001.jpg",
          "sha256": "df69302b02b6e7a8f21f623c4c7c5eab1935eb7b126671e49c5b6773e5e8de4d",
          "bytes": 828359,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/702822e129bdc6e1f8edcf6d7345457e1e4fdbf4.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1824_001_col.png",
        "asset": "/most-qa-web/media/780511568e026ca8957899882c2055acd9453f97.webp",
        "sha256": "8067EB4EFA5507BB51B2BC2FCE7AACD827929C7A1D7E60148F7CE8E0037F0049",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Facade massing, four visible main window positions, roofline, chimney, fence/gate, paving, vegetation, sign plaques and frame remain. No cleanup or hidden-surface reconstruction. Material hues are provisional; plaque color/lettering remains a limitation for A review.",
        "receipt_filename": "cp_1824_001_QA.json",
        "receipt_sha256": "36536e7c95289cafd2c21d0682a093aa107ada91297849455a71f78bb0e1d60d"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1824_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1824_001_col_20261022T052650869365Z.json",
          "receipt_sha256": "5f1f9641b199cdc6cc8595acf56540b905cb6c88ae62977e4a0aff1be51d7265"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1824-002",
      "case_version": "AG-LBK-v1-53515430959aba11",
      "unit_key": "cp_1824_002",
      "source_filename": "cp_1824_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1824"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "7c101f8f-1beb-471b-9d61-b716f24b0780",
          "filename": "cp_1824_002.jpg",
          "sha256": "53515430959aba1135568b344c40b88361671c3c4d12d5228e8451f30e21adc7",
          "bytes": 875066,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/454f0bf9d81d0539eb65178b4656dc305c42371d.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1824_002_col.png",
        "asset": "/most-qa-web/media/e4ecde45285e777918cd0b8ad340afcfc32abbfa.webp",
        "sha256": "0570AA62FDFDC9B99EAD9CDC6F348ED8CF64B78522045DDBACBC8030FB966B58",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "House massing, roof, balcony/railings, windows/doors, visible damage, foreground bare trees/branches, low outbuilding, path, lawn and frame remain. No cleanup/reconstruction. Material hues provisional.",
        "receipt_filename": "cp_1824_002_QA.json",
        "receipt_sha256": "48701f27f5debc820048ab383f56a80b675ffdbbc55e5d12e7d790f5b02f2abd"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1824_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1824_002_col_20261022T052655334990Z.json",
          "receipt_sha256": "ee81e4fb1acaf35ba3bb06d199b00fe3bd6ee22cd786ee3f943591627ec163d2"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1825-001",
      "case_version": "AG-LBK-v1-26783f66e10c22ab",
      "unit_key": "cp_1825_001",
      "source_filename": "cp_1825_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1825"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "87cd654c-52ee-4c91-8708-8ea5205ad5cd",
          "filename": "cp_1825_001.jpg",
          "sha256": "26783f66e10c22abac7c8241f1be8e8822f057686ea74fbe0ee76abe86c1a65c",
          "bytes": 795237,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/c0d998b31a288c07eb04f387dbcb1eea7f3de82a.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1825_001_col.png",
        "asset": "/most-qa-web/media/1ccef24a4118addb81f9bd4f281710b72776ed2a.webp",
        "sha256": "389E3A1E381DA9BB79F2AFD865844259F090BA2A76984EC0232CBE33AE6037C0",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt preserves clear sky, house geometry/openings, bare tree, fence/gate, road markings and the man silhouette, pose and location. First attempt with cloud forms is separately rejected. Clothing and all material colors remain provisional.",
        "receipt_filename": "cp_1825_001_QA.json",
        "receipt_sha256": "724b50354482645d34b87128956bbb4ac121bc7e1ebb4aa9cebcf75727bd91fa"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1825-001-jpg-A1-52A1D8709FD3",
          "filename": "cp_1825_001_attempt1_col.png",
          "asset": "/most-qa-web/media/4e8ae5292d285496f27a288fe36234a167367424.webp",
          "source_filename": "cp_1825_001.jpg",
          "source_id": "87cd654c-52ee-4c91-8708-8ea5205ad5cd",
          "source_sha256": "26783F66E10C22ABAC7C8241F1BE8E8822F057686EA74FBE0EE76ABE86C1A65C",
          "sha256": "52A1D8709FD332FD73985D528221164393B6D0534D6CAF1C7AC2D2BE6386A4EB",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: the uniform source sky gained diffuse cloud-like forms. Variant retained; one second attempt remains. No upload.",
          "reason_cs": "Jednotná obloha se změnila na oblačné tvary.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1825_001_attempt1_QA.json",
          "receipt_sha256": "7d026645838f173bb3f8b5f1f11526ee7c3021ab8d10c07f2228486dafc4979b",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1825_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1825_001_col_20261022T052659951776Z.json",
          "receipt_sha256": "2cde6fc8f2d554861c20c08c9e6bc3fec6e7a937a52def28dc24c4f186f15338"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1825-002",
      "case_version": "AG-LBK-v1-577df3e811070d32",
      "unit_key": "cp_1825_002",
      "source_filename": "cp_1825_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1825"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "b3be56f0-9d95-407a-8244-bec81ae8cb73",
          "filename": "cp_1825_002.jpg",
          "sha256": "577df3e811070d32de80a4d3c5acb66fb392dfdf1bb7029ee39ecbf2d50ad46b",
          "bytes": 708928,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/dd973d55dd4ad26ed4958976ae64360d07d78f41.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1825_002_col.png",
        "asset": "/most-qa-web/media/54cebc0e84edaf23b4621c435edd785cfc12b786.webp",
        "sha256": "3B10A8124C2CD48266EC4EE6D8C9BCDE1F45E6FA76AECBA0FDE3EAD413061EE9",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Courtyard house massing/roof, openings, damaged plaster, attached outbuilding, foreground basin, standing person, leaves, gate and path are retained. No cleanup or reconstruction. All material hues provisional.",
        "receipt_filename": "cp_1825_002_QA.json",
        "receipt_sha256": "c4ad81eedb1bd3f65c877735b41c7b977162087b329c77ebba796b7f4ca81814"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1825_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1825_002_col_20261022T052704969148Z.json",
          "receipt_sha256": "10eb937d395ec2a77607ec20eb5dc6a8307e41020c4344719099e920b6080ef0"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1825-003",
      "case_version": "AG-LBK-v1-b51fe56145c4089b",
      "unit_key": "cp_1825_003",
      "source_filename": "cp_1825_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1825"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "b346cc31-3047-463c-9616-dbe26a701282",
          "filename": "cp_1825_003.jpg",
          "sha256": "b51fe56145c4089b885cfac07bf753dc72f74b1b4fe33406aad76a20a265e682",
          "bytes": 531252,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/1587c1396cc9beab032fcee610bdc732d7a868ec.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1825_003_col.png",
        "asset": "/most-qa-web/media/1fd2b42da40431bae52ed9921a66b9cdbe77c788.webp",
        "sha256": "53BCEEF3BAF691969C5D6B933D085552E24B07A72416BF4FDDE3F1EEB7A66A21",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt retains garage roof/parapet without the added rear chimney seen in attempt 1, large doors, small opening, block stack, paving, wall and adjoining structures. No cleanup/reconstruction; hues provisional.",
        "receipt_filename": "cp_1825_003_QA.json",
        "receipt_sha256": "3de298b80911482e8465a74ed116692632b4ee4063a7172bbdb3241fe22f5db0"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1825-003-jpg-A1-5B8BEFC9FA36",
          "filename": "cp_1825_003_attempt1_col.png",
          "asset": "/most-qa-web/media/7d454b4316a83a7e7fc3a26c59ca49f821814c1e.webp",
          "source_filename": "cp_1825_003.jpg",
          "source_id": "b346cc31-3047-463c-9616-dbe26a701282",
          "source_sha256": "B51FE56145C4089B885CFAC07BF753DC72F74B1B4FE33406AAD76A20A265E682",
          "sha256": "5B8BEFC9FA36A0D081C70605C14B69DC6DB9A16B2C3A1389108B7B0F391C28FA",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Rejected: added a chimney to the rear roof absent in the source and changed roof silhouette. Variant retained; one final attempt remains. No upload.",
          "reason_cs": "Přibyl komín a změnil se obrys střechy.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1825_003_attempt1_QA.json",
          "receipt_sha256": "3ede254de543871d8c507ad2f9df9257e30da18c11a8c8116670f46068be4a90",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1825_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1825_003_col_20261022T052836595807Z.json",
          "receipt_sha256": "348cacf4495cae303294822a82dcee69ac8690e2efe27b00c3142a3f8df632f5"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1825-004",
      "case_version": "AG-LBK-v1-850b136c773b79de",
      "unit_key": "cp_1825_004",
      "source_filename": "cp_1825_004.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1825"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "a274e305-8f94-403b-a363-73bf8ec0e3f6",
          "filename": "cp_1825_004.jpg",
          "sha256": "850b136c773b79de46daeb50c7a8f7b45082df0efe5861adbad4a891a95900fb",
          "bytes": 884669,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6c46359924cd76b5572c605b32fa1d116dc0063b.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1825_004_col.png",
        "asset": "/most-qa-web/media/f143802e6e985ad9b846289738c676759b6d142a.webp",
        "sha256": "77E1CA9291EED3940C1E43C5052001D9EE73EB887331A445E25B8022BEA8C242",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt preserves clear sky without introduced cloud forms and keeps the shed geometry, tree, branches, wires, fence, garden items, basin, paths, foreground rail and archival frame in the source composition. Material hues are provisional model hypotheses; no foreground cleanup or hidden-surface reconstruction.",
        "receipt_filename": "cp_1825_004_QA.json",
        "receipt_sha256": "d88e98fe1dcedd5c24b3b442a1379205ea605998d33a5c302255b875ccc6fc5c"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1825-004-jpg-A1-5DAD4EA77EE8",
          "filename": "cp_1825_004_col__attempt1.png",
          "asset": "/most-qa-web/media/a4253644120794aea889aaab7d461de66892f2a6.webp",
          "source_filename": "cp_1825_004.jpg",
          "source_id": "a274e305-8f94-403b-a363-73bf8ec0e3f6",
          "source_sha256": "850B136C773B79DE46DAEB50C7A8F7B45082DF0EFE5861ADBAD4A891A95900FB",
          "sha256": "5DAD4EA77EE82F3D5D2BB488A7B57CD26E9B84B81E11ADA201F5DD09F618E552",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required_pending_attempt2",
          "rejection_reason": "Added faint cloud-like streaking in upper sky where the source is clear; violates exact visible-content preservation. Building composition, tree, wires, fence, garden furniture, basin, paths, foreground rail and archival border are retained.",
          "reason_cs": "V čisté obloze přibyly slabé oblačné šmouhy.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1825_004_attempt1_QA.json",
          "receipt_sha256": "24d354a71213efe3bb1afaad18fcf1cafc9841f4f6c7c57359e796a48212b24d",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1825_004_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1825_004_col_20261022T061302208385Z.json",
          "receipt_sha256": "86b8a84a2776ae6106330be8f90cd1c3f8df36c9d92b45a1bd80b5fe614cd212"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1825-005",
      "case_version": "AG-LBK-v1-7667ed0f4616e45e",
      "unit_key": "cp_1825_005",
      "source_filename": "cp_1825_005.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1825"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "8f0ccb77-82cb-473e-9d39-244056d1e44a",
          "filename": "cp_1825_005.jpg",
          "sha256": "7667ed0f4616e45e4061593c341ca92395c1e6c9f9049fa2af506e91e3626f45",
          "bytes": 730413,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/cce0d2fbb6de31b7e783fe2ba942ac9b78f79411.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1825_005_col.png",
        "asset": "/most-qa-web/media/2e6b916f0640a518b7a5e6945285421399fa497f.webp",
        "sha256": "2038F5FB14038605CA6DA49EAAF9FDAC0DB86B05129F61B59A6188090D8A6FF1",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Court house massing, roof and dormers/chimneys, damaged wall and openings, low adjoining structures, timber gates/fences, foreground vegetation and archival frame are retained. No deliberate object removal, addition or hidden-surface reconstruction. Colors and material distinctions remain provisional hypotheses.",
        "receipt_filename": "cp_1825_005_QA.json",
        "receipt_sha256": "984089d0f9a2e9d2643477f437695c18ad3de234b0e335ba93e72e5a6d4fe2b7"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1825_005_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1825_005_col_20261022T061306635115Z.json",
          "receipt_sha256": "006de5f5c7a5a834a977100e20f6c6e01b09ea207249fbb7b2ffb8823b3697a8"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1833-1835-001",
      "case_version": "AG-LBK-v1-ec81ccbc4a8ac631",
      "unit_key": "cp_1833,1835_001",
      "source_filename": "cp_1833,1835_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1833",
        "1835"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "7111b1ee-2e55-4db8-acb5-42a95a12f06b",
          "filename": "cp_1833,1835_001.jpg",
          "sha256": "ec81ccbc4a8ac631d95c786d2187fc9d73007e1b29884b4ebc26f5b5e47dd7ac",
          "bytes": 853798,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/c1123ee16629d65ea0f2c7f0412fa97a9b74d9da.webp"
        },
        {
          "source_id": "30927e57-76eb-4328-a848-8152b00e4e18",
          "filename": "cp_1833,1835_001.jpg",
          "sha256": "ec81ccbc4a8ac631d95c786d2187fc9d73007e1b29884b4ebc26f5b5e47dd7ac",
          "bytes": 853798,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/c1123ee16629d65ea0f2c7f0412fa97a9b74d9da.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1833,1835_001_col.png",
        "asset": "/most-qa-web/media/25ee3f55754f5f801d9d4b67a87945cdff7fb8b1.webp",
        "sha256": "B3A3065022996785CFBF01791A9E24ACC2B7002ECD39DC5989AB0910E89C5008",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Second attempt preserves the source clear sky without cloud forms; row-house rooflines, dormers, chimneys, facade openings, neighboring house, trees, branches, utility wire, fence/gate, road and original archival border remain in place. Both target CPs have live PHOTO records with byte-identical canonical source. Material hues are provisional model hypotheses; no objects or hidden surfaces were removed/reconstructed.",
        "receipt_filename": "cp_1833,1835_001_QA.json",
        "receipt_sha256": "b78c6e076aa904e6e26f2bc84b0a56523bdf0e67309e42f93320bfed6a87fdd0"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-1833-1835-001-jpg-A1-FFF525752F28",
          "filename": "cp_1833_1835_001_col__attempt1.png",
          "asset": "/most-qa-web/media/93384ae4f2337f008096e69b3a0fe23fb0fc23dc.webp",
          "source_filename": "cp_1833,1835_001.jpg",
          "source_id": "7111b1ee-2e55-4db8-acb5-42a95a12f06b",
          "source_sha256": "EC81CCBC4A8AC631D95C786D2187FC9D73007E1B29884B4EBC26F5B5E47DD7AC",
          "sha256": "FFF525752F286194A291426BB970AAC1F51B0F0C43B3D990E85D503E231A1C24",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required_pending_attempt2",
          "rejection_reason": "Generated wispy cloud forms in sky that is blank in the original. House row, window openings, roofline, dormers, chimneys, trees, fence, road and archival border remain broadly aligned.",
          "reason_cs": "Na prázdné obloze se objevily jemné oblačné tvary.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1833,1835_001_attempt1_QA.json",
          "receipt_sha256": "4a4fa63efca4d309cb84d5ecee22fee296c3200a920dd2a7f4c39e09e9858b2d",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1833,1835_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1833_1835_001_col_20261022T061333601039Z.json",
          "receipt_sha256": "963dc7ab589f45ebf831bcc0704389ece4bda3d2163029e940a61b4975664c79"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1833-001",
      "case_version": "AG-LBK-v1-5a80c51309bd9e57",
      "unit_key": "cp_1833_001",
      "source_filename": "cp_1833_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1833"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "7486fed4-bc83-4050-aa27-0cb053474a6c",
          "filename": "cp_1833_001.jpg",
          "sha256": "5a80c51309bd9e57365879cdc71cafc455ef53a892632d5bd93b88c85226ef27",
          "bytes": 947270,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/e07bd0c93716349603411927e41401ef3c04a834.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1833_001_col.png",
        "asset": "/most-qa-web/media/8acf45521fb40f503b64fd16d76e0f82c5de0d61.webp",
        "sha256": "A317F7F9AB68BEFB98FFAD54C8DE9A137693916B14AD62EE928874D77A494F0E",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Preserves roofs, chimneys, facades, opening arrangement, visible damage, all bare foreground trees and branches, bushes/leaves, wires, fences, paths, background structures and full frame. Clear sky retained; no foreground object or obscured surface was intentionally changed. Material colors and foliage interpretations remain provisional.",
        "receipt_filename": "cp_1833_001_QA.json",
        "receipt_sha256": "f5bc77e87eea78c5dfbd962817a1793fa2faaee7b37400e3d41c498247830d68"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1833_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1833_001_col_20261022T061338342251Z.json",
          "receipt_sha256": "4db33c8f39d1209bead3aaebbfbb3f85cddb037ddc6840f73ec91ebf9bd0ccd1"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-1835-001",
      "case_version": "AG-LBK-v1-7eac58d5acd06474",
      "unit_key": "cp_1835_001",
      "source_filename": "cp_1835_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1835"
      ],
      "status": "human_review_required",
      "decision_needed": true,
      "decision_question": "Compare kiosk text/sign details against original scan before any acceptance or upload.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Potřebuji další pramen",
          "value": "more_evidence"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "6f7faed1-2ae1-427d-8c33-82fe0d277f6f",
          "filename": "cp_1835_001.jpg",
          "sha256": "7eac58d5acd064741415767a4719795d8a6fb58030f8ed693ca015149c6ca90e",
          "bytes": 837107,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/9ecd9dbf7e8136ae51976af99aaf6c3c62a3001a.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        {
          "variant_id": "VAR-cp-1835-001-jpg-A1-5527C3A023E5",
          "filename": "cp_1835_001_col__attempt1.png",
          "asset": "/most-qa-web/media/5cd571663cd747f1af1cb18cc9033ba6d9da0782.webp",
          "source_filename": "cp_1835_001.jpg",
          "source_id": "6f7faed1-2ae1-427d-8c33-82fe0d277f6f",
          "source_sha256": "7EAC58D5ACD064741415767A4719795D8A6FB58030F8ED693CA015149C6CA90E",
          "sha256": "5527C3A023E53EA38C9116420F1E5FB7F91FBCFD222A32BCF218D3858B7119D1",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required_pending_attempt2",
          "rejection_reason": "Added cloud forms to the clear, uniform source sky. Small kiosk/sign text was reinterpreted and no longer faithfully preserves the visible markings.",
          "reason_cs": "Přibyly mraky a byl přeinterpretován nápis na kiosku.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1835_001_attempt1_QA.json",
          "receipt_sha256": "22142077fb1c7fe46cc512ea6ba5a36a2cc0fd67ef236d609482b72a944cbb42",
          "later_accepted_output": false
        },
        {
          "variant_id": "VAR-cp-1835-001-jpg-A2-39E14BA625DF",
          "filename": "cp_1835_001_col__attempt2.png",
          "asset": "/most-qa-web/media/d546b3225904c76cfa16887f061aae6b9591090c.webp",
          "source_filename": "cp_1835_001.jpg",
          "source_id": "6f7faed1-2ae1-427d-8c33-82fe0d277f6f",
          "source_sha256": "7EAC58D5ACD064741415767A4719795D8A6FB58030F8ED693CA015149C6CA90E",
          "sha256": "39E14BA625DFACA334E567A27FF16F92B583DA9A06D807E3C9939F95FA29A5CE",
          "attempt": 2,
          "qa_status": "human_review_required",
          "review_status": "two_attempts_complete",
          "rejection_reason": "Source sky preserved without clouds. Small kiosk sign text/markings remain visually ambiguous and cannot be confirmed unchanged. Strict lettering preservation could not be proven; no variant accepted.",
          "reason_cs": "Text kiosku zůstává nečitelný a jeho zachování nelze potvrdit.",
          "reason_status": "recorded",
          "receipt_filename": "cp_1835_001_attempt2_QA.json",
          "receipt_sha256": "87694e0d4647f907968c0324c92fb91856da6c7ea8ec8a4048dd1f2ce3b2397e",
          "later_accepted_output": false
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "human_review_required",
        "reconstruction_performed": null,
        "foreground_cleanup_required": null,
        "receipt_filename": "cp_1835_001_attempt2_QA.json",
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-1930-001",
      "case_version": "AG-LBK-v1-2c0bb9a6fc12a66d",
      "unit_key": "cp_1930_001",
      "source_filename": "cp_1930_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "1930"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "47d7d514-60d8-499a-8d43-47f1c8ba999f",
          "filename": "cp_1930_001.jpg",
          "sha256": "2c0bb9a6fc12a66d1e42fa5b860852b28bd6b4fe7beb6de8d453e18dd783692e",
          "bytes": 859949,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/24b1349022410041ca26f2cef1661ef90d9c18ed.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_1930_001_col.png",
        "asset": "/most-qa-web/media/1feef390ccfcdce9f9850de21a1eefafa7416692.webp",
        "sha256": "0A555F2F6561E25120E8EE5146D96CFCF9964F86B5A09B8565A4F05CB709863D",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Single-storey outbuilding, door/window positions, roofline, surrounding trees, shrubs, fences, shadows, framing and original border remain. No foreground objects removed or hidden surfaces reconstructed. Colors are provisional hypotheses.",
        "receipt_filename": "cp_1930_001_QA.json",
        "receipt_sha256": "fa2f508e29d18fe3dd20cc8799404eb6603634c881f211dde915fb4b6ce0d250"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_1930_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_1930_001_col_20261022T052718087060Z.json",
          "receipt_sha256": "24b305719ee91b23181e3892d4c34558d44552d7eb957e567c0dd008670d9ffb"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-426-001",
      "case_version": "AG-LBK-v1-c66dda9dd381b047",
      "unit_key": "cp_426_001",
      "source_filename": "cp_426_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "426"
      ],
      "status": "human_review_required",
      "decision_needed": true,
      "decision_question": "Porovnej originál a uložené varianty; stav zůstává blokovaný.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Potřebuji další pramen",
          "value": "more_evidence"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "6122bc6b-9751-4d3f-9483-c1741aea277e",
          "filename": "cp_426_001.jpg",
          "sha256": "c66dda9dd381b047f884718bf7ec454ccd990d9aa336c05d00d89c6054af1b37",
          "bytes": 789666,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6ecb73207c231087933105bb7db2f1a778455863.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        {
          "variant_id": "VAR-cp-426-001-jpg-A1-704E48724443",
          "filename": "cp_426_001_attempt1_col.png",
          "asset": "/most-qa-web/media/9a79f2f666c61d3f8b9670365826a86c1e6ed07e.webp",
          "source_filename": "cp_426_001.jpg",
          "source_id": "6122bc6b-9751-4d3f-9483-c1741aea277e",
          "source_sha256": "C66DDA9DD381B047F884718BF7EC454CCD990D9AA336C05D00D89C6054AF1B37",
          "sha256": "704E48724443A5811DEEFC9A814B412EE7E4AE3A1FD73837238764B4CD47D3A8",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Variant adds laundry and vegetation and changes several window and facade details. Preserve for review; no upload.",
          "reason_cs": "Přibylo prádlo a zeleň a změnily se detaily oken a průčelí.",
          "reason_status": "recorded",
          "receipt_filename": "cp_426_001_attempt1_QA.json",
          "receipt_sha256": "3d30f1cd58124b2a22e794bba1e8d7a002be939bcf37e25dd948cf53c88da17b",
          "later_accepted_output": false
        },
        {
          "variant_id": "VAR-cp-426-001-jpg-A2-384F0929EF23",
          "filename": "cp_426_001_attempt2_col.png",
          "asset": "/most-qa-web/media/f0fb299387940ec2c1cda12f2a9b72e9864447bc.webp",
          "source_filename": "cp_426_001.jpg",
          "source_id": "6122bc6b-9751-4d3f-9483-c1741aea277e",
          "source_sha256": "C66DDA9DD381B047F884718BF7EC454CCD990D9AA336C05D00D89C6054AF1B37",
          "sha256": "384F0929EF23568462E821C74002AF33FC226D78B531311548D24CCE2BE34F27",
          "attempt": 2,
          "qa_status": "rejected",
          "review_status": "human_review_required",
          "rejection_reason": "Second variant still alters exact window and facade detail. Both attempts retained for human review; no further automated repair.",
          "reason_cs": "Druhý pokus stále mění detaily oken a průčelí.",
          "reason_status": "recorded",
          "receipt_filename": "cp_426_001_attempt2_QA.json",
          "receipt_sha256": "a8af1f2a1a09f46dba5338c3c381a8586082ad7cabe84c70e7481fff24d9bb0e",
          "later_accepted_output": false
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "rejected",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_426_001_attempt2_QA.json",
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-426-002",
      "case_version": "AG-LBK-v1-036aac9df7cfa779",
      "unit_key": "cp_426_002",
      "source_filename": "cp_426_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "426"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": false,
      "mapping_review_required": false,
      "mapping_reasons": [],
      "source_records": [
        {
          "source_id": "69ac8c73-db11-48a0-9962-1a65563c40dc",
          "filename": "cp_426_002.jpg",
          "sha256": "036aac9df7cfa77992043587b8bbd96a70e9a86cde981f33c9cc46d62da43e03",
          "bytes": 777146,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/e53e1adc7f4e3b51648073bf07029d694becb0c8.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_426_002_col.png",
        "asset": "/most-qa-web/media/851ca1e138c3c0fb15073e9640ad56efd0d5e19c.webp",
        "sha256": "30606CD1A985DBF39584FD7BE797270A8B74B396AD5A5C562B03A78F3342F007",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Building roofs, chimneys, openings, damage, neighboring buildings, wooden fence, concrete posts, utility wires, bare trees, grasses, path, shadows and archival frame remain in the source arrangement. Sky remains clear. No foreground objects were removed or hidden surfaces reconstructed; material hues provisional.",
        "receipt_filename": "cp_426_002_QA.json",
        "receipt_sha256": "457164af933a49642f77d29a5abe6b3e5214dcfcaea786c14d1b5d47bcf7d126"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_426_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_426_002_col_20261022T061344047272Z.json",
          "receipt_sha256": "01080ccbd02c942e5db577ba65b2d07474639bd33b64cbd76a44bd35aef08bf9"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-1503-1504-001",
      "case_version": "AG-LBK-v1-0ffbc27d40c80328",
      "unit_key": "cp_513,514,1503,1504_001",
      "source_filename": "cp_513,514,1503,1504_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514",
        "1503",
        "1504"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "74395d4b-12a9-458b-86bb-3bbd95055d9e",
          "filename": "cp_513,514,1503,1504_001.jpg",
          "sha256": "0ffbc27d40c8032831993ff073d8b9f22f5a835103d587843eeddd203d3580a0",
          "bytes": 739868,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6cb4610a82df8da89ddc16be4df46504c118b0a2.webp"
        },
        {
          "source_id": "401ff27d-f72d-4621-9132-b1a297217f45",
          "filename": "cp_513,514,1503,1504_001.jpg",
          "sha256": "0ffbc27d40c8032831993ff073d8b9f22f5a835103d587843eeddd203d3580a0",
          "bytes": 739868,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6cb4610a82df8da89ddc16be4df46504c118b0a2.webp"
        },
        {
          "source_id": "2edf860f-c026-4a5a-8422-89889d183b9e",
          "filename": "cp_513,514,1503,1504_001.jpg",
          "sha256": "0ffbc27d40c8032831993ff073d8b9f22f5a835103d587843eeddd203d3580a0",
          "bytes": 739868,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6cb4610a82df8da89ddc16be4df46504c118b0a2.webp"
        },
        {
          "source_id": "2700d76a-c6da-46c0-b3c3-740013ca806e",
          "filename": "cp_513,514,1503,1504_001.jpg",
          "sha256": "0ffbc27d40c8032831993ff073d8b9f22f5a835103d587843eeddd203d3580a0",
          "bytes": 739868,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6cb4610a82df8da89ddc16be4df46504c118b0a2.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514,1503,1504_001_col.png",
        "asset": "/most-qa-web/media/a03c888822443710850bc27da09697f92e903e1d.webp",
        "sha256": "BA64E3C5925D622649F6974C096F97723C6F7DEFF652B9832CCBD0A806165CD6",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Wide city view retains clock and pole, identified buildings, neighboring structures, distant skyline/hills, people/vehicles, fence, street lamps, foreground grass, deep shadow, curb, sky and frame. No objects removed or hidden surfaces reconstructed; color assignments remain provisional.",
        "receipt_filename": "cp_513,514,1503,1504_001_QA.json",
        "receipt_sha256": "d1902b31bd2f017bb2bac55ad66394c9ef89fab993dd43fe818febf05f82a0c0"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514,1503,1504_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_1503_1504_001_col_20261022T061406361943Z.json",
          "receipt_sha256": "429b3e68630b9e149675f33d1bf7fddf89e6989013f29081f58b6d1ecdb30e1c"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-001",
      "case_version": "AG-LBK-v1-d1af0fdc0e8b536b",
      "unit_key": "cp_513,514_001",
      "source_filename": "cp_513,514_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "excluded_before_generation",
      "decision_needed": true,
      "decision_question": "Dva záznamy sdílejí název, ale mají odlišné SHA-256 a scény.",
      "decision_choices": [
        {
          "label": "Ponechat blokované",
          "value": "keep_blocked"
        },
        {
          "label": "Nejprve ověřit identitu",
          "value": "identity_review"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "4bdb9856-84ab-4063-a836-a00ebace5382",
          "filename": "cp_513,514_001.jpg",
          "sha256": "d1af0fdc0e8b536b09f8aed697c8216c36c677ea61b6548403dd055f365d1ba7",
          "bytes": 858808,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/1436c4ba851df58c6124f7a757f046d1d4c471e1.webp"
        },
        {
          "source_id": "b0b1a832-1772-44b8-a293-87cbf281ca9d",
          "filename": "cp_513,514_001.jpg",
          "sha256": "0af6fffcb033a1a666c26746c30a0f49f730d5b60636f04d0f80c9ec2d40251e",
          "bytes": 744534,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/e64a441e2564f94e9c80a51768b20cbeba27fc01.webp"
        },
        {
          "source_id": "957b39ea-5f7f-4c5a-9c3f-a3def78c9779",
          "filename": "cp_513,514_001.jpg",
          "sha256": "0af6fffcb033a1a666c26746c30a0f49f730d5b60636f04d0f80c9ec2d40251e",
          "bytes": 744534,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/e64a441e2564f94e9c80a51768b20cbeba27fc01.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        null
      ],
      "excluded_reason": "human_review_required: two distinct live photo IDs share this canonical filename but have different SHA-256 and visibly different scenes; output naming collision makes one-to-one source/output mapping ambiguous.",
      "phase_qa": {
        "phase": null,
        "status": null,
        "reconstruction_performed": null,
        "foreground_cleanup_required": null,
        "receipt_filename": null,
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-002",
      "case_version": "AG-LBK-v1-6cecd0ba95ce8a3a",
      "unit_key": "cp_513,514_002",
      "source_filename": "cp_513,514_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "9f28cd29-0bd2-4bab-a9d9-833a85f958ea",
          "filename": "cp_513,514_002.jpg",
          "sha256": "6cecd0ba95ce8a3a4df4e0a7790dc008a6d92149080c0d127505361861592869",
          "bytes": 611931,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6beaa249f923f140938ff546f8ecfb2fe5278230.webp"
        },
        {
          "source_id": "70028531-db1a-4538-bbe2-4d625c338130",
          "filename": "cp_513,514_002.jpg",
          "sha256": "6cecd0ba95ce8a3a4df4e0a7790dc008a6d92149080c0d127505361861592869",
          "bytes": 611931,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6beaa249f923f140938ff546f8ecfb2fe5278230.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_002_col.png",
        "asset": "/most-qa-web/media/9d369504315da51b170b7c1db78391cd8b82e7ef.webp",
        "sha256": "311175BE7DC7E1D82CAF809D5628AA86FBBA50BD36B764C2A7463BAFCE90A416",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained railway building geometry, visible lettering, roof, windows, railway tracks, vehicle, all vegetation, utility poles and wires, frame and blank cloudless sky. No objects removed or surfaces reconstructed. Material hues remain provisional hypotheses.",
        "receipt_filename": "cp_513,514_002_QA.json",
        "receipt_sha256": "053609d3fb5f448c6b43ed15a60178f58a127796bdd87fd7193780fdcff25a45"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_002_col_20261022T061411501727Z.json",
          "receipt_sha256": "97b2500141dba39d8853b11ac82c560d99d545f8a7e06405c4c63f571ca894d6"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-003",
      "case_version": "AG-LBK-v1-9070c940084567dd",
      "unit_key": "cp_513,514_003",
      "source_filename": "cp_513,514_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "19cdcb42-c03c-4bd9-bf48-95a10ad7a7f6",
          "filename": "cp_513,514_003.jpg",
          "sha256": "9070c940084567dd744dfe6d13111d240bce05f4efff28425f617a7af69fffc8",
          "bytes": 702712,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/9d21cf1aa8a938566fd611251b1b72a1b5876d2f.webp"
        },
        {
          "source_id": "df594be7-1c97-4290-92f4-473445d63ed3",
          "filename": "cp_513,514_003.jpg",
          "sha256": "9070c940084567dd744dfe6d13111d240bce05f4efff28425f617a7af69fffc8",
          "bytes": 702712,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/9d21cf1aa8a938566fd611251b1b72a1b5876d2f.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_003_col.png",
        "asset": "/most-qa-web/media/811d55b941967bc6dd381828369ce25753492bb3.webp",
        "sha256": "73016D12197685238ED5702C75F18FD85553B412C6A7B1BC98B3AA6726BFB44E",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained all three visible building facades and openings, roofs/chimneys, foreground tree, grass, fence, tall foreground post, wires, streetlamp, blank cloudless sky and archival frame. No objects removed or hidden surfaces reconstructed; material hues are provisional.",
        "receipt_filename": "cp_513,514_003_QA.json",
        "receipt_sha256": "8fe4237304d266ca43e912999bf41b693ca2753e7c4cb27a79c5a1c605a8b7b6"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_003_col_20261022T061416759484Z.json",
          "receipt_sha256": "2c40dd68f846c3250a6bd39d34a24b7fe483f331a5931dc060175bf5dc66551f"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-004",
      "case_version": "AG-LBK-v1-5fdb589a1026e6fc",
      "unit_key": "cp_513,514_004",
      "source_filename": "cp_513,514_004.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "fa7eb4c6-3816-4349-810f-250d56266883",
          "filename": "cp_513,514_004.jpg",
          "sha256": "5fdb589a1026e6fce0c601292baed822859bdbc1fed29270465633bb70f856b7",
          "bytes": 693523,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/2c0f64c0cf2c1ebdb87ba4af2e2f8bb26239a392.webp"
        },
        {
          "source_id": "f7694e1f-b8aa-4ec7-a6bd-80abfbefb64d",
          "filename": "cp_513,514_004.jpg",
          "sha256": "5fdb589a1026e6fce0c601292baed822859bdbc1fed29270465633bb70f856b7",
          "bytes": 693523,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/2c0f64c0cf2c1ebdb87ba4af2e2f8bb26239a392.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_004_col.png",
        "asset": "/most-qa-web/media/37fa9cc92fc93093c760d8de3ffc10cb80458660.webp",
        "sha256": "160774D95E6CFEBAACDFF80A684786F5E1EF461F7C1E96B45578F62EB888859C",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained all buildings and visible architectural details, every bare tree/branch, hedge, fence, road, featureless overcast sky and original border. No objects removed or hidden surfaces reconstructed; hues are provisional.",
        "receipt_filename": "cp_513,514_004_QA.json",
        "receipt_sha256": "8f2c01d312bbbd33922ed1fd31e6fcf1a96bf0f1d9c6cb5a032446ba1d69b957"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_004_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_004_col_20261022T061423546277Z.json",
          "receipt_sha256": "4a8dc5ac42bb2d027dec18929238e050d111127d477021801fcd64b9970d824c"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-005",
      "case_version": "AG-LBK-v1-6e9494325bed4f6d",
      "unit_key": "cp_513,514_005",
      "source_filename": "cp_513,514_005.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "d26237f5-90d2-4603-869d-51e33a20b877",
          "filename": "cp_513,514_005.jpg",
          "sha256": "6e9494325bed4f6d8f547cac3fc91660f07c20c306e002405c28a7d4d1187ddc",
          "bytes": 712710,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6e97bae28361698d92a02c1451370ddffab152f7.webp"
        },
        {
          "source_id": "907c45d6-2f18-46c3-8542-dfc879d99e4c",
          "filename": "cp_513,514_005.jpg",
          "sha256": "6e9494325bed4f6d8f547cac3fc91660f07c20c306e002405c28a7d4d1187ddc",
          "bytes": 712710,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/6e97bae28361698d92a02c1451370ddffab152f7.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_005_col.png",
        "asset": "/most-qa-web/media/4b8f02a728a21118ed82414895c29b75622fda1c.webp",
        "sha256": "83B6FD5926265B78B6D3A1399C0F69978445007841D9DB0FA8B835D47D00FFB9",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Attempt 2 retained the source pole without generated warning stripes, station lettering, balcony, roof, windows, tracks, telegraph mast, vegetation, pile, frame and featureless overcast sky. Small balcony glyph remains a source-uncertain detail and is recorded as provisional; no objects removed or hidden surfaces reconstructed.",
        "receipt_filename": "cp_513,514_005_QA.json",
        "receipt_sha256": "4657b92b6627f0469445171fd48e6576df8578c5da180eb8f9b481eedd70929c"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-513-514-005-jpg-A1-7DE8C6385F55",
          "filename": "cp_513,514_005_col__attempt1.png",
          "asset": "/most-qa-web/media/a43c491e11301f258adfb533cdeb353c6f2b1986.webp",
          "source_filename": "cp_513,514_005.jpg",
          "source_id": "d26237f5-90d2-4603-869d-51e33a20b877",
          "source_sha256": "6E9494325BED4F6D8F547CAC3FC91660F07C20C306E002405C28A7D4D1187DDC",
          "sha256": "7DE8C6385F55CDC4C0DF71FAAF9A2D38A669471B5165953FF29A22255203E71C",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": null,
          "rejection_reason": "Generated a yellow-black warning stripe on the central pole absent from the source; source structure/marking must be preserved.",
          "reason_cs": "Na sloupu se objevil výstražný žlutočerný pruh.",
          "reason_status": "recorded",
          "receipt_filename": "cp_513,514_005_attempt1_QA.json",
          "receipt_sha256": "b533251af6d5a3d301232bc582c20d80d07c17ee686997e744011eeee4f50a5a",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_005_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_005_col_20261022T061448004941Z.json",
          "receipt_sha256": "18542da3dfabbb90db7d8d1334755fa1f3d19545ccc2206ccabfe15f48a492a0"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-006",
      "case_version": "AG-LBK-v1-6b7678bbd81b3cf7",
      "unit_key": "cp_513,514_006",
      "source_filename": "cp_513,514_006.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "68f2966a-e8fb-4175-a11b-bac04dc201ec",
          "filename": "cp_513,514_006.jpg",
          "sha256": "6b7678bbd81b3cf7934fbf3a78434687c80e48a609f4024c5058eef76de5166c",
          "bytes": 799967,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/3a1e8e3adecaef05a228fc9da0ab022feb851241.webp"
        },
        {
          "source_id": "89ae06b4-f6bd-4182-95c4-4ac816e16515",
          "filename": "cp_513,514_006.jpg",
          "sha256": "6b7678bbd81b3cf7934fbf3a78434687c80e48a609f4024c5058eef76de5166c",
          "bytes": 799967,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/3a1e8e3adecaef05a228fc9da0ab022feb851241.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_006_col.png",
        "asset": "/most-qa-web/media/1dcabc4678ef73c7fd595b25274cbc195b5489e9.webp",
        "sha256": "C7E6AEED13A959F3AED64767739C0EF32AA19265B906F14AB9802AC6CC02449F",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained station lettering, roof/building detail, all rail infrastructure, catenary wires and insulators, vegetation, track geometry, archival border and uniform overcast sky. No objects removed or hidden surfaces reconstructed; hues provisional.",
        "receipt_filename": "cp_513,514_006_QA.json",
        "receipt_sha256": "6a6d4fa601569c98b8ff8329f501328c559652fefe10ada29fe766b207766e44"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_006_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_006_col_20261022T061453982365Z.json",
          "receipt_sha256": "eabd866215a0ab19f3f7cb496deaa620528fc234fa91b1bac51adf8b6d530a10"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-007",
      "case_version": "AG-LBK-v1-b6ce2c749e10ba7a",
      "unit_key": "cp_513,514_007",
      "source_filename": "cp_513,514_007.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "cad37b25-89e4-418e-8bbd-9f326a603ef4",
          "filename": "cp_513,514_007.jpg",
          "sha256": "b6ce2c749e10ba7ac280c413b68e170deabd1ceeb227f375d6751970b3c412a4",
          "bytes": 860547,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/dddd0c2a286d2fe6212e6e574090f59a88799c67.webp"
        },
        {
          "source_id": "24f04fd1-9bb7-41b1-b508-6c2d8c24b912",
          "filename": "cp_513,514_007.jpg",
          "sha256": "b6ce2c749e10ba7ac280c413b68e170deabd1ceeb227f375d6751970b3c412a4",
          "bytes": 860547,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/dddd0c2a286d2fe6212e6e574090f59a88799c67.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_007_col.png",
        "asset": "/most-qa-web/media/a366d2ac80ab666aa76040e3920a9cfe183e2f7b.webp",
        "sha256": "449019007C87F2993BC69E18303DF1E7CE449F0194F9739CF84D21765F5884C6",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Attempt 2 preserved large trees and branching bare, architecture and vegetation silhouettes, hedges, grasses, fence, wires, road, blank overcast sky and archival borders. No objects removed or hidden surfaces reconstructed; material hues provisional.",
        "receipt_filename": "cp_513,514_007_QA.json",
        "receipt_sha256": "172665f13d6de2089337490d8c6df61ac2809d427422eb1a8746194a17503e4d"
      },
      "variants": [
        {
          "variant_id": "VAR-cp-513-514-007-jpg-A1-07657CA758DF",
          "filename": "cp_513,514_007_col__attempt1.png",
          "asset": "/most-qa-web/media/a9369f9f81ab656f04ec963201347244f63d95d4.webp",
          "source_filename": "cp_513,514_007.jpg",
          "source_id": "cad37b25-89e4-418e-8bbd-9f326a603ef4",
          "source_sha256": "B6CE2C749E10BA7AC280C413B68E170DEABD1CEEB227F375D6751970B3C412A4",
          "sha256": "07657CA758DF07BE02411C3963FD45E6D4320A607ECF94666AA6563CFCCE4991",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": null,
          "rejection_reason": "Generation added dense foliage to the large foreground-right tree where the source depicts visible bare branching; attempt two must preserve the tree structure without added leaves.",
          "reason_cs": "Na holém stromě vpravo přibylo husté listí.",
          "reason_status": "recorded",
          "receipt_filename": "cp_513,514_007_attempt1_QA.json",
          "receipt_sha256": "84f9a831ea7ee5c18d2ee56490f3c2752a14aaa45322972e03f795e1848c5470",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_007_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_007_col_20261022T061459645722Z.json",
          "receipt_sha256": "0eacd0b80bb9ad60c3d1054b3bbf55122f8164f0b58f9d8e16f3dcdf4824548f"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-513-514-008",
      "case_version": "AG-LBK-v1-6b065168fa0b680a",
      "unit_key": "cp_513,514_008",
      "source_filename": "cp_513,514_008.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "30c2ad41-c04f-4065-9bc1-34ec1bb90893",
          "filename": "cp_513,514_008.jpg",
          "sha256": "6b065168fa0b680ab5bae97a8ce0f37335c9c085593022664879dd16c53f2aac",
          "bytes": 1013303,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/9bfc342da5458b6a8ead394ca2f24a295d47286d.webp"
        },
        {
          "source_id": "2db7dca0-5a66-4f8c-9995-c43601f580f7",
          "filename": "cp_513,514_008.jpg",
          "sha256": "6b065168fa0b680ab5bae97a8ce0f37335c9c085593022664879dd16c53f2aac",
          "bytes": 1013303,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/9bfc342da5458b6a8ead394ca2f24a295d47286d.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_513,514_008_col.png",
        "asset": "/most-qa-web/media/518fda1b5dba06839715913e5f9f4e3dae157599.webp",
        "sha256": "82F88CAD9F9E672C42B90EED3D68BB3F5B27B959076ED8E7C02BBD87B33B74F9",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained facade arrangement and visible sign, all openings, bare pruned trees, hedge, fences/posts, utility pole, ground, uniform gray sky, scratches and border. No objects removed or hidden surfaces reconstructed; all inferred color remains provisional.",
        "receipt_filename": "cp_513,514_008_QA.json",
        "receipt_sha256": "d90b8fad135fcf2cfd3efa6d6be57730e859617f9adaa3b0770e5680f4b2fe8c"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_513,514_008_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_513_514_008_col_20261022T061505225595Z.json",
          "receipt_sha256": "d775b3d74ce43a6e5621ccddde9ea3e063cf9538746e727bfc5b8bbe16f3d4b2"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-692-704-744-723-001",
      "case_version": "AG-LBK-v1-67a7dd5b944014fb",
      "unit_key": "cp_692,704,744,723_001",
      "source_filename": "cp_692,704,744,723_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "692"
      ],
      "status": "excluded_before_generation",
      "decision_needed": true,
      "decision_question": "Sken pohlednice s rukopisnou notací není fotografická předloha. Má se vyřazení zachovat?",
      "decision_choices": [
        {
          "label": "Ponechat vyřazené",
          "value": "keep_excluded"
        },
        {
          "label": "Znovu posoudit jen typ pramene",
          "value": "source_review"
        },
        {
          "label": "Nevím / ponechat blokované",
          "value": "unsure"
        }
      ],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "filename_attachment_mismatch",
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "ca187c77-369b-4732-aa58-a3d7ed4ae393",
          "filename": "cp_692,704,744,723_001.jpg",
          "sha256": "67a7dd5b944014fb8ad7a030c753c1b2cdb57d60cd731e2df6ca5b261afc69dc",
          "bytes": 918065,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/311bb6f8f1b46acabd0921642220db1b08f24536.webp"
        }
      ],
      "accepted_output": null,
      "variants": [
        null
      ],
      "excluded_reason": "excluded: archival postcard scan with handwritten musical notation and printed image, not a photographic original eligible for colorization.",
      "phase_qa": {
        "phase": null,
        "status": null,
        "reconstruction_performed": null,
        "foreground_cleanup_required": null,
        "receipt_filename": null,
        "upload": null
      }
    },
    {
      "case_id": "AG-LBK-cp-729-878-001",
      "case_version": "AG-LBK-v1-ec56fece4bf9a209",
      "unit_key": "cp_729,878_001",
      "source_filename": "cp_729,878_001.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "729",
        "878"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "93b2025b-4359-470d-b5ec-4c05cd40968a",
          "filename": "cp_729,878_001.jpg",
          "sha256": "ec56fece4bf9a2098fae1511f0c35de85e92b1c2be709d30659065335a67f9a5",
          "bytes": 863890,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/5b58c894d1f9b9ecfeee80eb810f5eee7c2eea83.webp"
        },
        {
          "source_id": "2d324b3e-8620-4633-b349-246271d9a567",
          "filename": "cp_729,878_001.jpg",
          "sha256": "ec56fece4bf9a2098fae1511f0c35de85e92b1c2be709d30659065335a67f9a5",
          "bytes": 863890,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/5b58c894d1f9b9ecfeee80eb810f5eee7c2eea83.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_729,878_001_col.png",
        "asset": "/most-qa-web/media/3aa122c32b5fe143e43ff6820c2d0ec24012b9da.webp",
        "sha256": "A4EBD7AEEE89BDE566F5AC48C6B7A06FCB0D32E881DD5687F2718F1F8B516C05",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained all visible tree canopies/branches/trunks, grass, roadside, fence and posts, blank overcast sky, archive frame and grain. No structures or surfaces reconstructed and no objects removed; unverified material hues are provisional.",
        "receipt_filename": "cp_729,878_001_QA.json",
        "receipt_sha256": "9a59dd93fc87f6fafb3a70b1f0858b9bfd74b8e0c7e98347ac0723c32e4a4eed"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_729,878_001_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_729_878_001_col_20261022T061529590263Z.json",
          "receipt_sha256": "4e14daf6784b5f59a31650282a80c9d6065df436cf6b2b2eecb01d135dcde674"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-729-878-002",
      "case_version": "AG-LBK-v1-db265235bcc8fb16",
      "unit_key": "cp_729,878_002",
      "source_filename": "cp_729,878_002.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "729",
        "878"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "a9002925-b26b-4825-88fc-cff769add9a2",
          "filename": "cp_729,878_002.jpg",
          "sha256": "db265235bcc8fb16120df4fce426cd2bab0e56f456cdc11acd2eccd2a177aef4",
          "bytes": 749121,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/d59820eb92a305c8c33a48271a3194bc1c92b3fb.webp"
        },
        {
          "source_id": "563d23ae-c7d2-41b4-aefa-4d05d415a686",
          "filename": "cp_729,878_002.jpg",
          "sha256": "db265235bcc8fb16120df4fce426cd2bab0e56f456cdc11acd2eccd2a177aef4",
          "bytes": 749121,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/d59820eb92a305c8c33a48271a3194bc1c92b3fb.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_729,878_002_col.png",
        "asset": "/most-qa-web/media/8aa5ae401bb7da327a5599666bbf5b96ddd71edf.webp",
        "sha256": "B662A84F42682E3199C7EF721B01085B36939DB58B14754520ABB2B1F1E971E5",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained the visible person by the gate in the same pose and location, all buildings, tracks, gate, trees/branches, grasses, blank bright left sky/haze and archive frame. No removal or hidden-surface reconstruction; unverified colors provisional.",
        "receipt_filename": "cp_729,878_002_QA.json",
        "receipt_sha256": "84154cdc4837c0ddad954316ac30ad4d1d0eeadf7c3fadf1f782a1242ae32869"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_729,878_002_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_729_878_002_col_20261022T061535294964Z.json",
          "receipt_sha256": "11e02a49c2f695bda04a9568ceac206ba4e01c4b101c99875af4269ed448cbfa"
        }
      }
    },
    {
      "case_id": "AG-LBK-cp-729-878-003",
      "case_version": "AG-LBK-v1-153cbc5b79ba528a",
      "unit_key": "cp_729,878_003",
      "source_filename": "cp_729,878_003.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "729",
        "878"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "db291b35-db72-4063-b583-92feef892e6f",
          "filename": "cp_729,878_003.jpg",
          "sha256": "153cbc5b79ba528ab9af50ef4e53ab8a7a10beb0d03662e69155168fa31d923e",
          "bytes": 685524,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/c70ca539267749b64d9ecbf58acf25de38d03fed.webp"
        },
        {
          "source_id": "37b52db0-e9f1-4bd7-aa45-9365ac36184b",
          "filename": "cp_729,878_003.jpg",
          "sha256": "153cbc5b79ba528ab9af50ef4e53ab8a7a10beb0d03662e69155168fa31d923e",
          "bytes": 685524,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/c70ca539267749b64d9ecbf58acf25de38d03fed.webp"
        }
      ],
      "accepted_output": {
        "filename": "cp_729,878_003_col.png",
        "asset": "/most-qa-web/media/9c8f81057d17b7793a0e77b67f05a83fdd18d421.webp",
        "sha256": "797874A3C8D162FF60BE7DF08C373EA2320E59164EBB911B84BE3FE61DAFBF6F",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Retained wall weathering/damage, timber stacks, tracks, people at far right, distant buildings, edge annotations and archival frame, with no removals or hidden-surface reconstruction. Unverified material colors remain provisional.",
        "receipt_filename": "cp_729,878_003_QA.json",
        "receipt_sha256": "17fdc93fc86179f2eefb44c733901c2fe30924b20344e09b4385810cfd271221"
      },
      "variants": [
        null
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "cp_729,878_003_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_cp_729_878_003_col_20261022T061541431758Z.json",
          "receipt_sha256": "14aa63cbfdfd638ad58cb251955a6a21dec35abc9ea0cbbc828aa579abde372b"
        }
      }
    },
    {
      "case_id": "AG-LBK-foto-000783",
      "case_version": "AG-LBK-v1-80c0f734383cbeaa",
      "unit_key": "foto-000783",
      "source_filename": "FOTO-000783.jpg",
      "source_type": "PHOTO,BW",
      "attached_cps": [
        "513",
        "514"
      ],
      "status": "accepted_for_A_review",
      "decision_needed": false,
      "decision_question": null,
      "decision_choices": [],
      "multi_building_candidate": true,
      "mapping_review_required": true,
      "mapping_reasons": [
        "multiple_cps_require_visual_mapping"
      ],
      "source_records": [
        {
          "source_id": "d0198a05-84fc-4da5-a210-fed9641db1b6",
          "filename": "FOTO-000783.jpg",
          "sha256": "80c0f734383cbeaa03a5211b2a305ddc9470e90cb8e9ff11a67df3a8f3060dea",
          "bytes": 1077210,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/ac2cf14dce8df7b8085c231cd59228e3bd38c718.webp"
        },
        {
          "source_id": "9fc0cd84-8033-49b0-bdaf-54785fb4678b",
          "filename": "FOTO-000783.jpg",
          "sha256": "80c0f734383cbeaa03a5211b2a305ddc9470e90cb8e9ff11a67df3a8f3060dea",
          "bytes": 1077210,
          "tags": [
            "BW",
            "PHOTO"
          ],
          "asset": "/most-qa-web/media/ac2cf14dce8df7b8085c231cd59228e3bd38c718.webp"
        }
      ],
      "accepted_output": {
        "filename": "FOTO-000783_col.png",
        "asset": "/most-qa-web/media/193fc7fa715ad3fed194744e8106baa673baee7e.webp",
        "sha256": "89C70903625AE4C223485A13120E3FC4B3748A2276FE729576E7FF216D182576",
        "phase": "COLOR_ONLY",
        "qa_status": "passed_color_only",
        "visual_review": "Attempt 2 retained the facade layout and sign, bare trees, hedge, fences and posts, utility pole, railway wagons, archival wear and frame; sky is blank with no invented cloud forms. No removals or hidden-surface reconstruction; all hue assignments provisional.",
        "receipt_filename": "FOTO-000783_QA.json",
        "receipt_sha256": "bf15d45db99fe55d98d748854ef00e53d6d3af4e9ab4349665228ab34bfef315"
      },
      "variants": [
        {
          "variant_id": "VAR-foto-000783-jpg-A1-0F81C9F16529",
          "filename": "FOTO-000783_col__attempt1.png",
          "asset": "/most-qa-web/media/201710c980ca5e518e1ee16619ca796a0d4e96db.webp",
          "source_filename": "FOTO-000783.jpg",
          "source_id": "d0198a05-84fc-4da5-a210-fed9641db1b6",
          "source_sha256": "80C0F734383CBEAA03A5211B2A305DDC9470E90CB8E9FF11A67DF3A8F3060DEA",
          "sha256": "0F81C9F16529733332BFDB5FD90D285EA17AC4FFFE1417D7017AD30300ED248D",
          "attempt": 1,
          "qa_status": "rejected",
          "review_status": null,
          "rejection_reason": "Added distinct cloud forms to the source uniform blank sky.",
          "reason_cs": "Na prázdné obloze přibyly zřetelné mraky.",
          "reason_status": "recorded",
          "receipt_filename": "FOTO-000783_attempt1_QA.json",
          "receipt_sha256": "c26b321b29e0005f6ba5b6b8e51b2f2a071ee5e7744df50070da7757e284154f",
          "later_accepted_output": true
        }
      ],
      "excluded_reason": null,
      "phase_qa": {
        "phase": "COLOR_ONLY",
        "status": "passed_color_only",
        "reconstruction_performed": false,
        "foreground_cleanup_required": false,
        "receipt_filename": "FOTO-000783_QA.json",
        "upload": {
          "status": "uploaded",
          "receipt_filename": "AG_FOTO-000783_col_20261022T061546725656Z.json",
          "receipt_sha256": "abcd18d6d91b38c163df120f434091ee52d8722c7959992b938e15d71637e977"
        }
      }
    }
  ],
  "variants": [
    {
      "variant_id": "VAR-cp-1425-002-jpg-A1-F7886EAC709E",
      "filename": "cp_1425_002_attempt1_col.png",
      "asset": "/most-qa-web/media/2059a8bd546883a4b55ed0a055ab2b52eb732db7.webp",
      "source_filename": "cp_1425_002.jpg",
      "source_id": "ccc526bf-1a80-419a-a8c0-da11af6759a0",
      "source_sha256": "C9F41A51AC9D3974F5776A64772DC5EBA8C72C07F9199FC20E6DE446EB801987",
      "sha256": "F7886EAC709E016C5556EBCCE5EB034865ADF3AF3EABB37D76BDCB1667CD3FFD",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Colorization introduced changed camera perspective/composition and invented sky/cloud detail compared with the source. Preserve variant for review; no upload.",
      "reason_cs": "Změnila se perspektiva kamery a kompozice a přibyly mraky.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1425_002_attempt1_QA.json",
      "receipt_sha256": "6fb9090d55ecca1378bcc4e1cf85db908c90178418f87c300d3b1691a1a21f19",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1425-002-jpg-A2-64E6E9D1F09E",
      "filename": "cp_1425_002_attempt2_col.png",
      "asset": "/most-qa-web/media/1aabd4510d1afa30870294b948bc8d9a8ec178d8.webp",
      "source_filename": "cp_1425_002.jpg",
      "source_id": "ccc526bf-1a80-419a-a8c0-da11af6759a0",
      "source_sha256": "C9F41A51AC9D3974F5776A64772DC5EBA8C72C07F9199FC20E6DE446EB801987",
      "sha256": "64E6E9D1F09E397704FAF3AFC92C14A12CA907B2885EBF09541A1E6D70226941",
      "attempt": 2,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Second variant still shifts/reinterprets facade geometry and camera perspective relative to source. Both attempts retained for human review; no further automated repair.",
      "reason_cs": "Druhý pokus stále mění geometrii průčelí a perspektivu.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1425_002_attempt2_QA.json",
      "receipt_sha256": "e0a3688b8b7a10e3daf8503e6853409d24f6a172dc0ad429cb7391e994d8bc90",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1425-003-jpg-A1-92860B361CB8",
      "filename": "cp_1425_003_attempt1_col.png",
      "asset": "/most-qa-web/media/944f4d0d7e64aaf0623c998672b0a3b074ebbb66.webp",
      "source_filename": "cp_1425_003.jpg",
      "source_id": "838d91dc-70bd-48b3-aecb-3dd5fe0f7eb1",
      "source_sha256": "E8F3EDDE6E02F483CE7445DA1E36A804E28AE317A183E26D3C6BA330B351AD2A",
      "sha256": "92860B361CB812501C3DD7B34E573E0AA5E1B8B77A4F59676066685877C92962",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: output changes the source viewpoint/framing and invents a roof dormer; facade opening positions and ground arrangement are reinterpreted. Retained as a rejected variant. No upload.",
      "reason_cs": "Změnil se úhel a výřez, přibyl vikýř a změnily se otvory i terén.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1425_003_attempt1_QA.json",
      "receipt_sha256": "b3d61feec92d8aa3997dc136a80567fb6d0a0ccd1baf69c9c558095ea6895bb4",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1425-003-jpg-A2-F038341EF91A",
      "filename": "cp_1425_003_attempt2_col.png",
      "asset": "/most-qa-web/media/e8e19c9f3bf08ad2d6091eb33d795499bf610d04.webp",
      "source_filename": "cp_1425_003.jpg",
      "source_id": "838d91dc-70bd-48b3-aecb-3dd5fe0f7eb1",
      "source_sha256": "E8F3EDDE6E02F483CE7445DA1E36A804E28AE317A183E26D3C6BA330B351AD2A",
      "sha256": "F038341EF91A230674D844C0DFCB3211E8CAE21E8334A28941FBECE73B9B74A0",
      "attempt": 2,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected after second attempt: the output repeats the changed viewpoint/building orientation and altered façade/ground details; two attempts exhausted. Both variants retained for human review. No upload.",
      "reason_cs": "Druhý pokus opakuje změněný úhel a mění průčelí i terén.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1425_003_attempt2_QA.json",
      "receipt_sha256": "9788d9be03d5753ee1c74a7d8c6472df43740f961a8519ccd655acaae9795112",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1503-001-jpg-A1-2C5BD8F262D0",
      "filename": "cp_1503_001_attempt1_col.png",
      "asset": "/most-qa-web/media/232c888de2367ebceca4d7c914c0d5ccb01d1852.webp",
      "source_filename": "cp_1503_001.jpg",
      "source_id": "1f191eec-531e-45ec-9f33-30a7290e8bc8",
      "source_sha256": "F4FFC4FEBEEF7491CE41B2EBA260B220B14265AF0655F1BD90F089B62AD8DADC",
      "sha256": "2C5BD8F262D022EB2CB31F063CE34E64391418ED7FD14E4A853426AFFCEAE2FF",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Variant changes facade/window geometry and adds/reinterprets details; source arrangement is not preserved. Retained for review.",
      "reason_cs": "Změnila se geometrie průčelí a oken a přibyly detaily.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1503_001_attempt1_QA.json",
      "receipt_sha256": "ef21b7221cee28363828309dbd5be3df6630220d14158e88132b5ac764c54a40",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1503-001-jpg-A2-C78E4CE21449",
      "filename": "cp_1503_001_attempt2_col.png",
      "asset": "/most-qa-web/media/3be645b0d0f5fc4792d436adcd0b469e75ea02e8.webp",
      "source_filename": "cp_1503_001.jpg",
      "source_id": "1f191eec-531e-45ec-9f33-30a7290e8bc8",
      "source_sha256": "F4FFC4FEBEEF7491CE41B2EBA260B220B14265AF0655F1BD90F089B62AD8DADC",
      "sha256": "C78E4CE21449A5023EAEC38CA44DE451CEE6982564287A452D7BF678F62B7CFA",
      "attempt": 2,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Second variant still materially changes window/opening layout relative to source. Both variants preserved for human review; no further automated attempt.",
      "reason_cs": "Druhý pokus stále mění rozmístění oken a otvorů.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1503_001_attempt2_QA.json",
      "receipt_sha256": "d5dda760e4a5fa537821b40021c50dbd409b15c83f574fc8d4eae4a72a383053",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1691-003-jpg-A1-DBBDEA5A5C4E",
      "filename": "cp_1691_003_attempt1_col.png",
      "asset": "/most-qa-web/media/d27d000f800734e1be410739d287c7470a1b413a.webp",
      "source_filename": "cp_1691_003.jpg",
      "source_id": "c7edcf94-2aa3-486e-ab8e-138c31d0daec",
      "source_sha256": "45C5E3C563435B80DBF0017DE607CE352874C5407C91310FA2C1178BD251DDF2",
      "sha256": "DBBDEA5A5C4E404FEFF0AE78917C6B5B713BF990C8DEDB0C5D0C73869F416970",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: output added pink flowers at the foundation, absent from the source. Variant preserved; one allowed second attempt remains. No upload.",
      "reason_cs": "Přibyly růžové květy u soklu, které ve zdroji nejsou.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1691_003_attempt1_QA.json",
      "receipt_sha256": "cb1e3ea5f0d5451d8a5c0c01dc18dafff31fdd338b7ec683b79cc16e95177d5b",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1691-004-jpg-A1-C5D58EBFB6A0",
      "filename": "cp_1691_004_attempt1_col.png",
      "asset": "/most-qa-web/media/71c89068c717fa3b4ed2407f7a5c0f5b4c4aee03.webp",
      "source_filename": "cp_1691_004.jpg",
      "source_id": "edd58cad-9550-4163-9191-9b9d37c691fd",
      "source_sha256": "F8549060CE9677B4AF70580DCC8899A3D61B84B694C9C09F6232B78CCC31CB3C",
      "sha256": "C5D58EBFB6A0A60B1D52EFC6659C3EE12862609EDB3F5BB05836F9148BDEEB43",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: two visible source bins in front of the left outbuilding were omitted. Variant preserved; one allowed second attempt remains. No upload.",
      "reason_cs": "Chyběly dvě popelnice před levou vedlejší stavbou.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1691_004_attempt1_QA.json",
      "receipt_sha256": "2dddb8b89284748a1cda3a313ea341335634c87a315337798b1d2dac589ace84",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1691-004-jpg-A2-30FD23CE057A",
      "filename": "cp_1691_004_attempt2_col.png",
      "asset": "/most-qa-web/media/c6921d6803de916225a6d50a61a59749b187800f.webp",
      "source_filename": "cp_1691_004.jpg",
      "source_id": "edd58cad-9550-4163-9191-9b9d37c691fd",
      "source_sha256": "F8549060CE9677B4AF70580DCC8899A3D61B84B694C9C09F6232B78CCC31CB3C",
      "sha256": "30FD23CE057A002E65AFD0405052282535167ABE9336CB674F130C81D54DAF14",
      "attempt": 2,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected after second attempt: although both source bins are now present, the output adds laundry on the fence absent from the original. Attempts exhausted; preserve both variants for human review. No upload.",
      "reason_cs": "Na plot přibylo prádlo, které na předloze není.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1691_004_attempt2_QA.json",
      "receipt_sha256": "38ed204f767613cfb4cb9c1e1ea824093e86a9f3960733e769f24e0dbb94a1e3",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1692-003-jpg-A1-EA9E4DC30609",
      "filename": "cp_1692_003_attempt1_col.png",
      "asset": "/most-qa-web/media/fa12ea7b32a248659cf36f8cb43653ff56abdc29.webp",
      "source_filename": "cp_1692_003.jpg",
      "source_id": "f47437e5-f5b2-4382-8dd8-38a49bab8474",
      "source_sha256": "E1307CB240D90998D8D59B28BAB4F0B82DC30827E8A166A625DEB950AFAD01E9",
      "sha256": "EA9E4DC30609406923122AF53F02F639DB9F5EABFCF0C1214EC6378C6F0839FF",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: added a green potted plant at the large upper window, not visible in the source. Variant preserved; one second attempt remains. No upload.",
      "reason_cs": "U okna přibyla květina, kterou zdroj nedokládá.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1692_003_attempt1_QA.json",
      "receipt_sha256": "925849d76ed9af6b39e3fe424c4e9371292aaece0121386f8a302f691d37824f",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1692-004-jpg-A1-653D236D91D3",
      "filename": "cp_1692_004_attempt1_col.png",
      "asset": "/most-qa-web/media/a99d6a943dc01337a7e82d32a453fafcfb057f7e.webp",
      "source_filename": "cp_1692_004.jpg",
      "source_id": "fc500599-7a7c-44bb-b1a8-3ff95c656d8b",
      "source_sha256": "56F5D8BEDD4D7D47B6342100124B6BBD319D5C953CB087D08306C9C6B4277275",
      "sha256": "653D236D91D313D6BB6B73CD3270147BD0827DA663E2C5E98E40EC3CA80ABE95",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: bare background trees in the source gained leaves in the output. Variant preserved; one final attempt remains. No upload.",
      "reason_cs": "Holé stromy v pozadí dostaly listí.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1692_004_attempt1_QA.json",
      "receipt_sha256": "d6ee0cce1b12ae7fcb2d5d2937c5935eca1e8738ccdf6e16ac100b0eee2f7910",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1813-001-jpg-A1-750FF3231A0E",
      "filename": "cp_1813_001_attempt1_col.png",
      "asset": "/most-qa-web/media/bc519521992efef1810f8a285507b2113d841a76.webp",
      "source_filename": "cp_1813_001.jpg",
      "source_id": "0bd3a1cc-0bac-43c7-bdfb-197c3511510c",
      "source_sha256": "A711637B5F92229461CF5775989CA13B1FAD596CB5D78EFD4A2680BF63EDE047",
      "sha256": "750FF3231A0E7B9DFEF97A4D5DC182D13CBE1CBE4236E0CC8A3C4CC96098205A",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: introduced cloud forms in the clear source sky and strengthened/reinterpreted demolition details. Variant retained; one final attempt remains. No upload.",
      "reason_cs": "Do čisté oblohy přibyly mraky a změnily se detaily demolice.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1813_001_attempt1_QA.json",
      "receipt_sha256": "599e2caa54a37fa603df35e836d334c2b27adf8a02fe535147f4bc1823660b9d",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1825-001-jpg-A1-52A1D8709FD3",
      "filename": "cp_1825_001_attempt1_col.png",
      "asset": "/most-qa-web/media/4e8ae5292d285496f27a288fe36234a167367424.webp",
      "source_filename": "cp_1825_001.jpg",
      "source_id": "87cd654c-52ee-4c91-8708-8ea5205ad5cd",
      "source_sha256": "26783F66E10C22ABAC7C8241F1BE8E8822F057686EA74FBE0EE76ABE86C1A65C",
      "sha256": "52A1D8709FD332FD73985D528221164393B6D0534D6CAF1C7AC2D2BE6386A4EB",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: the uniform source sky gained diffuse cloud-like forms. Variant retained; one second attempt remains. No upload.",
      "reason_cs": "Jednotná obloha se změnila na oblačné tvary.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1825_001_attempt1_QA.json",
      "receipt_sha256": "7d026645838f173bb3f8b5f1f11526ee7c3021ab8d10c07f2228486dafc4979b",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1825-003-jpg-A1-5B8BEFC9FA36",
      "filename": "cp_1825_003_attempt1_col.png",
      "asset": "/most-qa-web/media/7d454b4316a83a7e7fc3a26c59ca49f821814c1e.webp",
      "source_filename": "cp_1825_003.jpg",
      "source_id": "b346cc31-3047-463c-9616-dbe26a701282",
      "source_sha256": "B51FE56145C4089B885CFAC07BF753DC72F74B1B4FE33406AAD76A20A265E682",
      "sha256": "5B8BEFC9FA36A0D081C70605C14B69DC6DB9A16B2C3A1389108B7B0F391C28FA",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Rejected: added a chimney to the rear roof absent in the source and changed roof silhouette. Variant retained; one final attempt remains. No upload.",
      "reason_cs": "Přibyl komín a změnil se obrys střechy.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1825_003_attempt1_QA.json",
      "receipt_sha256": "3ede254de543871d8c507ad2f9df9257e30da18c11a8c8116670f46068be4a90",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1825-004-jpg-A1-5DAD4EA77EE8",
      "filename": "cp_1825_004_col__attempt1.png",
      "asset": "/most-qa-web/media/a4253644120794aea889aaab7d461de66892f2a6.webp",
      "source_filename": "cp_1825_004.jpg",
      "source_id": "a274e305-8f94-403b-a363-73bf8ec0e3f6",
      "source_sha256": "850B136C773B79DE46DAEB50C7A8F7B45082DF0EFE5861ADBAD4A891A95900FB",
      "sha256": "5DAD4EA77EE82F3D5D2BB488A7B57CD26E9B84B81E11ADA201F5DD09F618E552",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required_pending_attempt2",
      "rejection_reason": "Added faint cloud-like streaking in upper sky where the source is clear; violates exact visible-content preservation. Building composition, tree, wires, fence, garden furniture, basin, paths, foreground rail and archival border are retained.",
      "reason_cs": "V čisté obloze přibyly slabé oblačné šmouhy.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1825_004_attempt1_QA.json",
      "receipt_sha256": "24d354a71213efe3bb1afaad18fcf1cafc9841f4f6c7c57359e796a48212b24d",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1833-1835-001-jpg-A1-FFF525752F28",
      "filename": "cp_1833_1835_001_col__attempt1.png",
      "asset": "/most-qa-web/media/93384ae4f2337f008096e69b3a0fe23fb0fc23dc.webp",
      "source_filename": "cp_1833,1835_001.jpg",
      "source_id": "7111b1ee-2e55-4db8-acb5-42a95a12f06b",
      "source_sha256": "EC81CCBC4A8AC631D95C786D2187FC9D73007E1B29884B4EBC26F5B5E47DD7AC",
      "sha256": "FFF525752F286194A291426BB970AAC1F51B0F0C43B3D990E85D503E231A1C24",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required_pending_attempt2",
      "rejection_reason": "Generated wispy cloud forms in sky that is blank in the original. House row, window openings, roofline, dormers, chimneys, trees, fence, road and archival border remain broadly aligned.",
      "reason_cs": "Na prázdné obloze se objevily jemné oblačné tvary.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1833,1835_001_attempt1_QA.json",
      "receipt_sha256": "4a4fa63efca4d309cb84d5ecee22fee296c3200a920dd2a7f4c39e09e9858b2d",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-1835-001-jpg-A1-5527C3A023E5",
      "filename": "cp_1835_001_col__attempt1.png",
      "asset": "/most-qa-web/media/5cd571663cd747f1af1cb18cc9033ba6d9da0782.webp",
      "source_filename": "cp_1835_001.jpg",
      "source_id": "6f7faed1-2ae1-427d-8c33-82fe0d277f6f",
      "source_sha256": "7EAC58D5ACD064741415767A4719795D8A6FB58030F8ED693CA015149C6CA90E",
      "sha256": "5527C3A023E53EA38C9116420F1E5FB7F91FBCFD222A32BCF218D3858B7119D1",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required_pending_attempt2",
      "rejection_reason": "Added cloud forms to the clear, uniform source sky. Small kiosk/sign text was reinterpreted and no longer faithfully preserves the visible markings.",
      "reason_cs": "Přibyly mraky a byl přeinterpretován nápis na kiosku.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1835_001_attempt1_QA.json",
      "receipt_sha256": "22142077fb1c7fe46cc512ea6ba5a36a2cc0fd67ef236d609482b72a944cbb42",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-1835-001-jpg-A2-39E14BA625DF",
      "filename": "cp_1835_001_col__attempt2.png",
      "asset": "/most-qa-web/media/d546b3225904c76cfa16887f061aae6b9591090c.webp",
      "source_filename": "cp_1835_001.jpg",
      "source_id": "6f7faed1-2ae1-427d-8c33-82fe0d277f6f",
      "source_sha256": "7EAC58D5ACD064741415767A4719795D8A6FB58030F8ED693CA015149C6CA90E",
      "sha256": "39E14BA625DFACA334E567A27FF16F92B583DA9A06D807E3C9939F95FA29A5CE",
      "attempt": 2,
      "qa_status": "human_review_required",
      "review_status": "two_attempts_complete",
      "rejection_reason": "Source sky preserved without clouds. Small kiosk sign text/markings remain visually ambiguous and cannot be confirmed unchanged. Strict lettering preservation could not be proven; no variant accepted.",
      "reason_cs": "Text kiosku zůstává nečitelný a jeho zachování nelze potvrdit.",
      "reason_status": "recorded",
      "receipt_filename": "cp_1835_001_attempt2_QA.json",
      "receipt_sha256": "87694e0d4647f907968c0324c92fb91856da6c7ea8ec8a4048dd1f2ce3b2397e",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-426-001-jpg-A1-704E48724443",
      "filename": "cp_426_001_attempt1_col.png",
      "asset": "/most-qa-web/media/9a79f2f666c61d3f8b9670365826a86c1e6ed07e.webp",
      "source_filename": "cp_426_001.jpg",
      "source_id": "6122bc6b-9751-4d3f-9483-c1741aea277e",
      "source_sha256": "C66DDA9DD381B047F884718BF7EC454CCD990D9AA336C05D00D89C6054AF1B37",
      "sha256": "704E48724443A5811DEEFC9A814B412EE7E4AE3A1FD73837238764B4CD47D3A8",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Variant adds laundry and vegetation and changes several window and facade details. Preserve for review; no upload.",
      "reason_cs": "Přibylo prádlo a zeleň a změnily se detaily oken a průčelí.",
      "reason_status": "recorded",
      "receipt_filename": "cp_426_001_attempt1_QA.json",
      "receipt_sha256": "3d30f1cd58124b2a22e794bba1e8d7a002be939bcf37e25dd948cf53c88da17b",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-426-001-jpg-A2-384F0929EF23",
      "filename": "cp_426_001_attempt2_col.png",
      "asset": "/most-qa-web/media/f0fb299387940ec2c1cda12f2a9b72e9864447bc.webp",
      "source_filename": "cp_426_001.jpg",
      "source_id": "6122bc6b-9751-4d3f-9483-c1741aea277e",
      "source_sha256": "C66DDA9DD381B047F884718BF7EC454CCD990D9AA336C05D00D89C6054AF1B37",
      "sha256": "384F0929EF23568462E821C74002AF33FC226D78B531311548D24CCE2BE34F27",
      "attempt": 2,
      "qa_status": "rejected",
      "review_status": "human_review_required",
      "rejection_reason": "Second variant still alters exact window and facade detail. Both attempts retained for human review; no further automated repair.",
      "reason_cs": "Druhý pokus stále mění detaily oken a průčelí.",
      "reason_status": "recorded",
      "receipt_filename": "cp_426_001_attempt2_QA.json",
      "receipt_sha256": "a8af1f2a1a09f46dba5338c3c381a8586082ad7cabe84c70e7481fff24d9bb0e",
      "later_accepted_output": false
    },
    {
      "variant_id": "VAR-cp-513-514-005-jpg-A1-7DE8C6385F55",
      "filename": "cp_513,514_005_col__attempt1.png",
      "asset": "/most-qa-web/media/a43c491e11301f258adfb533cdeb353c6f2b1986.webp",
      "source_filename": "cp_513,514_005.jpg",
      "source_id": "d26237f5-90d2-4603-869d-51e33a20b877",
      "source_sha256": "6E9494325BED4F6D8F547CAC3FC91660F07C20C306E002405C28A7D4D1187DDC",
      "sha256": "7DE8C6385F55CDC4C0DF71FAAF9A2D38A669471B5165953FF29A22255203E71C",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": null,
      "rejection_reason": "Generated a yellow-black warning stripe on the central pole absent from the source; source structure/marking must be preserved.",
      "reason_cs": "Na sloupu se objevil výstražný žlutočerný pruh.",
      "reason_status": "recorded",
      "receipt_filename": "cp_513,514_005_attempt1_QA.json",
      "receipt_sha256": "b533251af6d5a3d301232bc582c20d80d07c17ee686997e744011eeee4f50a5a",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-cp-513-514-007-jpg-A1-07657CA758DF",
      "filename": "cp_513,514_007_col__attempt1.png",
      "asset": "/most-qa-web/media/a9369f9f81ab656f04ec963201347244f63d95d4.webp",
      "source_filename": "cp_513,514_007.jpg",
      "source_id": "cad37b25-89e4-418e-8bbd-9f326a603ef4",
      "source_sha256": "B6CE2C749E10BA7AC280C413B68E170DEABD1CEEB227F375D6751970B3C412A4",
      "sha256": "07657CA758DF07BE02411C3963FD45E6D4320A607ECF94666AA6563CFCCE4991",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": null,
      "rejection_reason": "Generation added dense foliage to the large foreground-right tree where the source depicts visible bare branching; attempt two must preserve the tree structure without added leaves.",
      "reason_cs": "Na holém stromě vpravo přibylo husté listí.",
      "reason_status": "recorded",
      "receipt_filename": "cp_513,514_007_attempt1_QA.json",
      "receipt_sha256": "84f9a831ea7ee5c18d2ee56490f3c2752a14aaa45322972e03f795e1848c5470",
      "later_accepted_output": true
    },
    {
      "variant_id": "VAR-foto-000783-jpg-A1-0F81C9F16529",
      "filename": "FOTO-000783_col__attempt1.png",
      "asset": "/most-qa-web/media/201710c980ca5e518e1ee16619ca796a0d4e96db.webp",
      "source_filename": "FOTO-000783.jpg",
      "source_id": "d0198a05-84fc-4da5-a210-fed9641db1b6",
      "source_sha256": "80C0F734383CBEAA03A5211B2A305DDC9470E90CB8E9FF11A67DF3A8F3060DEA",
      "sha256": "0F81C9F16529733332BFDB5FD90D285EA17AC4FFFE1417D7017AD30300ED248D",
      "attempt": 1,
      "qa_status": "rejected",
      "review_status": null,
      "rejection_reason": "Added distinct cloud forms to the source uniform blank sky.",
      "reason_cs": "Na prázdné obloze přibyly zřetelné mraky.",
      "reason_status": "recorded",
      "receipt_filename": "FOTO-000783_attempt1_QA.json",
      "receipt_sha256": "c26b321b29e0005f6ba5b6b8e51b2f2a071ee5e7744df50070da7757e284154f",
      "later_accepted_output": true
    }
  ],
  "prior_remote_state": {
    "new_uploads_by_this_web_task": 0,
    "live_recheck_performed": false,
    "verified_target_links": 58
  }
};
