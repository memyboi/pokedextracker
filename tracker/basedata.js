const items = {
    antidote: "Antidote",
    _awakening: "Awakening",
    _bicycle: "Bicycle",
    _bike_voucher: "Bike Voucher",
    _burn_heal: "Burn Heal",
    _calcium: "Calcium",
    _carbos: "Carbos",
    _card_key__kanto_: "Card Key (Kanto)",
    _coin_case: "Coin Case",
    _dire_hit: "Dire Hit",
    _dome_fossil: "Dome Fossil",
    _dowsing_machine: "Dowsing Machine",
    _elixir: "Elixir",
    _escape_rope: "Escape Rope",
    _ether: "Ether",
    _exp_share: "Exp. Share",
    _fire_stone: "Fire Stone",
    _fresh_water: "Fresh Water",
    _full_heal: "Full Heal",
    _full_restore: "Full Restore",
    _gold_teeth: "Gold Teeth",
    _good_rod: "Good Rod",
    _great_ball: "Great Ball",
    _guard_spec: "Guard Spec.",
    _helix_fossil: "Helix Fossil",
    _hm01: "HM01",
    _hm02: "HM02",
    _hm03: "HM03",
    _hm04: "HM04",
    _hm05: "HM05",
    _hp_up: "HP Up",
    _hyper_potion: "Hyper Potion",
    _ice_heal: "Ice Heal",
    _iron: "Iron",
    _leaf_stone: "Leaf Stone",
    _lemonade: "Lemonade",
    _lift_key: "Lift Key",
    _master_ball: "Master Ball",
    _max_elixir: "Max Elixir",
    _max_ether: "Max Ether",
    _max_potion: "Max Potion",
    _max_repel: "Max Repel",
    _max_revive: "Max Revive",
    _moon_stone: "Moon Stone",
    _nugget: "Nugget",
    _old_amber: "Old Amber",
    _old_rod: "Old Rod",
    _paralyze_heal: "Paralyze Heal",
    _parcel: "Parcel",
    _poké_ball__item_: "Poké Ball (item)",
    _poké_doll: "Poké Doll",
    _poké_flute: "Poké Flute",
    _potion: "Potion",
    _pp_up: "PP Up",
    _protein: "Protein",
    _rare_candy: "Rare Candy",
    _repel: "Repel",
    _revive: "Revive",
    _ss_ticket: "S.S. Ticket",
    _safari_ball: "Safari Ball",
    _secret_key__kanto_: "Secret Key (Kanto)",
    _silph_scope: "Silph Scope",
    _soda_pop: "Soda Pop",
    _super_potion: "Super Potion",
    _super_repel: "Super Repel",
    _super_rod: "Super Rod",
    _thunder_stone: "Thunder Stone",
    _user_chosen_sandbox_tm01: "User:Chosen/Sandbox/TM01",
    _tm001: "TM001",
    _tm002: "TM002",
    _tm003: "TM003",
    _tm004: "TM004",
    _tm005: "TM005",
    _tm006: "TM006",
    _tm007: "TM007",
    _tm008: "TM008",
    _tm009: "TM009",
    _tm010: "TM010",
    _tm011: "TM011",
    _tm012: "TM012",
    _tm013: "TM013",
    _tm014: "TM014",
    _tm015: "TM015",
    _tm016: "TM016",
    _tm017: "TM017",
    _tm018: "TM018",
    _tm019: "TM019",
    _tm020: "TM020",
    _tm021: "TM021",
    _tm022: "TM022",
    _tm023: "TM023",
    _tm024: "TM024",
    _tm025: "TM025",
    _tm026: "TM026",
    _tm027: "TM027",
    _tm028: "TM028",
    _tm029: "TM029",
    _tm030: "TM030",
    _tm031: "TM031",
    _tm032: "TM032",
    _tm033: "TM033",
    _tm034: "TM034",
    _tm035: "TM035",
    _tm036: "TM036",
    _tm037: "TM037",
    _tm038: "TM038",
    _tm039: "TM039",
    _tm040: "TM040",
    _tm041: "TM041",
    _tm042: "TM042",
    _tm043: "TM043",
    _tm044: "TM044",
    _tm045: "TM045",
    _tm046: "TM046",
    _tm047: "TM047",
    _tm048: "TM048",
    _tm049: "TM049",
    _tm050: "TM050",
    _town_map: "Town Map",
    _ultra_ball: "Ultra Ball",
    _water_stone: "Water Stone",
    _x_accuracy: "X Accuracy",
    _x_attack: "X Attack",
    _x_defense: "X Defense",
    _x_sp_atk: "X Sp. Atk",
    _x_speed: "X Speed",
    _amulet_coin: "Amulet Coin",
    _basement_key__johto_: "Basement Key (Johto)",
    _berry__item_: "Berry (item)",
    _berry_juice: "Berry Juice",
    _berserk_gene: "Berserk Gene",
    _big_mushroom: "Big Mushroom",
    _big_pearl: "Big Pearl",
    _bitter_berry: "Bitter Berry",
    _black_apricorn: "Black Apricorn",
    _black_belt__item_: "Black Belt (item)",
    _black_glasses: "Black Glasses",
    _blue_apricorn: "Blue Apricorn",
    _blue_card: "Blue Card",
    _brick_piece: "Brick Piece",
    _bright_powder: "Bright Powder",
    _burnt_berry: "Burnt Berry",
    _card_key__johto_: "Card Key (Johto)",
    _charcoal: "Charcoal",
    _cleanse_tag: "Cleanse Tag",
    _clear_bell: "Clear Bell",
    _dragon_fang: "Dragon Fang",
    _dragon_scale: "Dragon Scale",
    _egg_ticket: "Egg Ticket",
    _energy_powder: "Energy Powder",
    _energy_root: "Energy Root",
    _everstone: "Everstone",
    _fast_ball: "Fast Ball",
    _focus_band: "Focus Band",
    _friend_ball: "Friend Ball",
    _gold_berry: "Gold Berry",
    _gold_leaf: "Gold Leaf",
    _gorgeous_box: "Gorgeous Box",
    _green_apricorn: "Green Apricorn",
    _gs_ball: "GS Ball",
    _hard_stone: "Hard Stone",
    _heal_powder: "Heal Powder",
    _heavy_ball: "Heavy Ball",
    _hm06: "HM06",
    _hm07: "HM07",
    _ice_berry: "Ice Berry",
    _kings_rock: "King's Rock",
    _leek: "Leek",
    _leftovers: "Leftovers",
    _level_ball: "Level Ball",
    _light_ball: "Light Ball",
    _lost_item: "Lost Item",
    _love_ball: "Love Ball",
    _lucky_egg: "Lucky Egg",
    _lucky_punch: "Lucky Punch",
    _lure_ball: "Lure Ball",
    _machine_part: "Machine Part",
    _magnet: "Magnet",
    _metal_coat: "Metal Coat",
    _metal_powder: "Metal Powder",
    _mint_berry: "Mint Berry",
    _miracle_seed: "Miracle Seed",
    _miracleberry: "MiracleBerry",
    _moomoo_milk: "Moomoo Milk",
    _moon_ball: "Moon Ball",
    _mystery_egg: "Mystery Egg",
    _mysteryberry: "MysteryBerry",
    _mystic_water: "Mystic Water",
    _never_melt_ice: "Never-Melt Ice",
    _normal_box: "Normal Box",
    _pass: "Pass",
    _pearl__item_: "Pearl (item)",
    _pink_apricorn: "Pink Apricorn",
    _pink_bow: "Pink Bow",
    _poison_barb: "Poison Barb",
    _polkadot_bow: "Polkadot Bow",
    _przcureberry: "PRZCureBerry",
    _psncureberry: "PSNCureBerry",
    _quick_claw: "Quick Claw",
    _rage_candy_bar: "Rage Candy Bar",
    _rainbow_wing: "Rainbow Wing",
    _red_apricorn: "Red Apricorn",
    _red_scale: "Red Scale",
    _revival_herb: "Revival Herb",
    _sacred_ash: "Sacred Ash",
    _scope_lens: "Scope Lens",
    _secret_medicine: "Secret Medicine",
    _sharp_beak: "Sharp Beak",
    _silver_leaf: "Silver Leaf",
    _silver_powder: "Silver Powder",
    _silver_wing: "Silver Wing",
    _slowpoke_tail: "Slowpoke Tail",
    _smoke_ball: "Smoke Ball",
    _soft_sand: "Soft Sand",
    _spell_tag: "Spell Tag",
    _sport_ball: "Sport Ball",
    _squirt_bottle: "Squirt Bottle",
    _star_piece: "Star Piece",
    _stardust: "Stardust",
    _sun_stone: "Sun Stone",
    _teru_sama: "Teru-sama",
    _thick_club: "Thick Club",
    _tiny_mushroom: "Tiny Mushroom",
    _twisted_spoon: "Twisted Spoon",
    _upgrade: "Upgrade",
    _white_apricorn: "White Apricorn",
    _yellow_apricorn: "Yellow Apricorn",
    _acro_bike: "Acro Bike",
    _aguav_berry: "Aguav Berry",
    _apicot_berry: "Apicot Berry",
    _aspear_berry: "Aspear Berry",
    _auroraticket: "AuroraTicket",
    _basement_key__hoenn_: "Basement Key (Hoenn)",
    _battle_cd: "Battle CD",
    _belue_berry: "Belue Berry",
    _berry_pouch: "Berry Pouch",
    _black_flute: "Black Flute",
    _blu_id_badge: "Blu ID Badge",
    _blue_flute: "Blue Flute",
    _blue_orb: "Blue Orb",
    _blue_scarf: "Blue Scarf",
    _blue_shard: "Blue Shard",
    _bluk_berry: "Bluk Berry",
    _bonsly_card: "Bonsly Card",
    _bonsly_photo: "Bonsly Photo",
    _card_key__orre_: "Card Key (Orre)",
    _cheri_berry: "Cheri Berry",
    _chesto_berry: "Chesto Berry",
    _chilan_berry__generation_iii_: "Chilan Berry (Generation III)",
    _choice_band: "Choice Band",
    _claw_fossil: "Claw Fossil",
    _cologne_case: "Cologne Case",
    _contest_pass: "Contest Pass",
    _cornn_berry: "Cornn Berry",
    _cry_analyzer: "Cry Analyzer",
    _d_disk: "D-Disk",
    _data_rom: "Data ROM",
    _deep_sea_scale: "Deep Sea Scale",
    _deep_sea_tooth: "Deep Sea Tooth",
    _devon_parts: "Devon Parts",
    _devon_scope: "Devon Scope",
    _disc_case: "Disc Case",
    _dive_ball: "Dive Ball",
    _dna_sample: "DNA Sample",
    _down_st_key: "Down St. Key",
    _drash_berry: "Drash Berry",
    _durin_berry: "Durin Berry",
    _eggant_berry: "Eggant Berry",
    _ein_file: "Ein File",
    _elevator_key__orre_: "Elevator Key (Orre)",
    _enigma_berry: "Enigma Berry",
    _eon_ticket: "Eon Ticket",
    _excite_scent: "Excite Scent",
    _f_disk: "F-Disk",
    _fame_checker: "Fame Checker",
    _figy_berry: "Figy Berry",
    _fluffy_tail: "Fluffy Tail",
    _ganlon_berry: "Ganlon Berry",
    _gear__item_: "Gear (item)",
    _ginema_berry: "Ginema Berry",
    _go_goggles: "Go-Goggles",
    _gonzaps_key: "Gonzap's Key",
    _green_scarf: "Green Scarf",
    _green_shard: "Green Shard",
    _grepa_berry: "Grepa Berry",
    _grn_id_badge: "Grn ID Badge",
    _heart_scale: "Heart Scale",
    _hm08: "HM08",
    _hondew_berry: "Hondew Berry",
    _iapapa_berry: "Iapapa Berry",
    _id_card: "ID Card",
    _jail_key: "Jail Key",
    _joy_scent: "Joy Scent",
    _kelpsy_berry: "Kelpsy Berry",
    _key_to_room_1: "Key to Room 1",
    _key_to_room_2: "Key to Room 2",
    _key_to_room_4: "Key to Room 4",
    _key_to_room_6: "Key to Room 6",
    _krane_memo: "Krane Memo",
    _kuo_berry: "Kuo Berry",
    _l_disk: "L-Disk",
    _lansat_berry: "Lansat Berry",
    _lava_cookie: "Lava Cookie",
    _lax_incense: "Lax Incense",
    _leppa_berry: "Leppa Berry",
    _letter: "Letter",
    _liechi_berry: "Liechi Berry",
    _lum_berry: "Lum Berry",
    _luxury_ball: "Luxury Ball",
    _mach_bike: "Mach Bike",
    _machine_part__orre_: "Machine Part (Orre)",
    _macho_brace: "Macho Brace",
    _magma_emblem: "Magma Emblem",
    _mago_berry: "Mago Berry",
    _magost_berry: "Magost Berry",
    _maingate_key: "Maingate Key",
    _mayors_note: "Mayor's Note",
    _mental_herb: "Mental Herb",
    _meteorite: "Meteorite",
    _miror_radar: "Miror Radar",
    _moon_shard: "Moon Shard",
    _music_disc: "Music Disc",
    _mysticticket: "MysticTicket",
    _nanab_berry: "Nanab Berry",
    _nest_ball: "Nest Ball",
    _net_ball: "Net Ball",
    _niniku_berry: "Niniku Berry",
    _nomel_berry: "Nomel Berry",
    _nutpea_berry: "Nutpea Berry",
    _old_sea_map: "Old Sea Map",
    _oran_berry: "Oran Berry",
    _pamtre_berry: "Pamtre Berry",
    _pecha_berry: "Pecha Berry",
    _persim_berry: "Persim Berry",
    _petaya_berry: "Petaya Berry",
    _pinap_berry: "Pinap Berry",
    _pink_scarf: "Pink Scarf",
    _poké_snack: "Poké Snack",
    _pokéblock_case: "Pokéblock Case",
    _pomeg_berry: "Pomeg Berry",
    _powder_jar: "Powder Jar",
    _powerup_part: "Powerup Part",
    _pp_max: "PP Max",
    _premier_ball: "Premier Ball",
    _pumkin_berry: "Pumkin Berry",
    _qualot_berry: "Qualot Berry",
    _r_disk: "R-Disk",
    _rabuta_berry: "Rabuta Berry",
    _rainbow_pass: "Rainbow Pass",
    _rawst_berry: "Rawst Berry",
    _razz_berry: "Razz Berry",
    _red_flute: "Red Flute",
    _red_id_badge: "Red ID Badge",
    _red_orb: "Red Orb",
    _red_scarf: "Red Scarf",
    _red_shard: "Red Shard",
    _repeat_ball: "Repeat Ball",
    _root_fossil: "Root Fossil",
    _ruby__item_: "Ruby (item)",
    _salac_berry: "Salac Berry",
    _sapphire__item_: "Sapphire (item)",
    _scanner: "Scanner",
    _sea_incense: "Sea Incense",
    _shell_bell: "Shell Bell",
    _shoal_salt: "Shoal Salt",
    _shoal_shell: "Shoal Shell",
    _silk_scarf: "Silk Scarf",
    _sitrus_berry: "Sitrus Berry",
    _small_tablet: "Small Tablet",
    _soot_sack: "Soot Sack",
    _soothe_bell: "Soothe Bell",
    _soul_dew: "Soul Dew",
    _spelon_berry: "Spelon Berry",
    _starf_berry: "Starf Berry",
    _steel_teeth: "Steel Teeth",
    _storage_key__hoenn_: "Storage Key (Hoenn)",
    _strib_berry: "Strib Berry",
    _subway_key: "Subway Key",
    _sun_shard: "Sun Shard",
    _system_lever: "System Lever",
    _tamato_berry: "Tamato Berry",
    _tea: "Tea",
    _teachy_tv: "Teachy TV",
    _time_flute: "Time Flute",
    _timer_ball: "Timer Ball",
    _tm_case: "TM Case",
    _topo_berry: "Topo Berry",
    _touga_berry: "Touga Berry",
    _tri_pass: "Tri-Pass",
    _u_disk: "U-Disk",
    _vivid_scent: "Vivid Scent",
    _voice_case: "Voice Case",
    _vs_seeker: "Vs. Seeker",
    _wailmer_pail: "Wailmer Pail",
    _watmel_berry: "Watmel Berry",
    _wepear_berry: "Wepear Berry",
    _white_flute: "White Flute",
    _white_herb: "White Herb",
    _wiki_berry: "Wiki Berry",
    _yago_berry: "Yago Berry",
    _yellow_flute: "Yellow Flute",
    _yellow_scarf: "Yellow Scarf",
    _yellow_shard: "Yellow Shard",
    _ylw_id_badge: "Ylw ID Badge",
    _zinc: "Zinc",
}

const obtainStatus = {
    obtainable: "Obtainable",
    importable: "Transferrable",
    unobtainable: "Completely unobtainable",
}

const obtainMethod = {
    gift: "Given to the player",
    gift_req: "Given to the player for ",
    catch: "Caught by the player",
    snag: "Snagged by the player",
    evolve_level: "Evolved by level",
    evolve_item: "Evolved by item",
    evolve_friendship: "Evolved by friendship",
    evolve_trade: "Evolve by trading",
    evolve_trade_item: "Evolve by trading while holding ",
    unobtainable: "Unable to be obtained at all",
    pomeg: "Able to be glitched in using Glitzer popping",
    pomeg_location: "Able to use Glitzer popping to spawn in ",
    save_editing: "Requires external save modification to get ",
    channel_pal: "Given to a Ruby/Sapphire cartrige with Pokémon Channel in PAL Regions",
    colosseum_bonus_us: "Given to a Ruby/Sapphire cartridge with the Pokémon Colosseum Bonus Disc in the US",
    colosseum_bonus_jp: "Given to a Ruby/Sapphire cartridge with the Pokémon Colosseum Bonus Disc in Japan",
    box_egg: "Given to the player in Pokémon Box when depositing ",
    box_first: "Given to the player in Pokémon Box when connecting with a new cartridge.",
    purchased: "Bought at ",
    other: "Unknown way to obtain",
}

export {items, obtainStatus, obtainMethod}