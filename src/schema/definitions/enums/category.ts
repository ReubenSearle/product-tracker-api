import { gql } from 'apollo-server-express'

export default gql`
  enum Category {
    a4PaperReams
    accessControlEquipment
    acneBlemishTreatments
    actionFigures
    acupunctureSupplies
    agricultureFarmingEquipment
    agricultureFarmingStationaryEngines
    agricultureFarmingStorageTanks
    agricultureFarmingTrailers
    americanComicsGraphicNovels
    analysersDataAcquisitionEquipment
    antiAgeingProducts
    antiquarianCollectableBooks
    antiqueClocks
    antiqueFurniture
    antiqueSilver
    antiqueSolidSilver
    antiqueWoodenware
    antiques
    architecturalAntiques
    aromatherapySupplies
    art
    artCraftSupplies
    artDrawings
    artPaintings
    artPhotographs
    artPosters
    artPrints
    artSculptures
    artificialNailTips
    asianAntiques
    australianOceanianStamps
    babyEssentials
    babyFeedingSupplies
    babySafetyProducts
    babyToysActivities
    banknotes
    barSoaps
    bathBodyMixedItemsGiftSets
    bathBodyProducts
    bathBrushesSponges
    bathroomFixturesAccessoriesSupplies
    bathroomSinksVanities
    bathroomSuites
    bathroomSuppliesAccessories
    beadsJewelleryMakingSupplies
    bedBlankets
    bedPillows
    beddingSetsDuvetCovers
    bedsBedFramesDivanBases
    bedsMattresses
    bikes
    birdSupplies
    boatsWatercraft
    bodyLotionsMoisturisers
    bookcasesShelvingStorageFurniture
    booksComicsMagazines
    boysClothingShoesAccessories
    britishColonyTerritoryStamps
    buildingInsulationMaterialsSupplies
    buildingMaterialsSupplies
    bullionBars
    businessIndustrialMeasuringTools
    businessOfficeIndustrialSupplies
    camcorders
    cameraDronePhotoAccessories
    cameraLensesFilters
    camerasPhotographyEquipment
    campervansCaravansMotorhomes
    campingHikingEquipment
    carAccessories
    carManualsLiterature
    carParts
    carTuningStylingParts
    carWheelsTyresTrims
    cardmakingScrapbookingSupplies
    cardsInvitationsForCelebrationsOccasions
    cars
    carsMotorcyclesVehicles
    casesCoversSkinsForSamsungGalaxyS10e
    catSupplies
    celebrationOccasionSupplies
    celebrationsOccasions
    chairs
    childrensYoungAdultsBooks
    circuitBreakersDisconnectors
    classicCars
    cncMetalworkingManufacturing
    coinOperatedGaming
    coins
    coinsBanknotesBullion
    collectablePensWritingEquipment
    collectables
    collectibleCardGamesAccessories
    comicBooksMangaMemorabilia
    commercialBarBeverageEquipment
    commercialKitchenEquipment
    commercialRefrigerationEquipment
    commercialTabletopServing
    commercialVehicles
    computerComponentsParts
    computerDrivesStorageBlankMedia
    computerMonitors
    computerPrintersScannersSupplies
    computersTabletsNetworkHardware
    constructionBuildingToys
    constructionTools
    conveyorsConveyorParts
    copiersCopierSupplies
    costumeJewellery
    costumeMasksEyeMasks
    cultDvDsBluRays
    cyclingEquipment
    dailyLivingAids
    dancewearAccessories
    dateLinedCeramics
    dentalFlossFlossers
    deodorantsAntiPerspirants
    diamondPaintingCrossStitchKits
    diecastVehiclesPartsAccessories
    dietarySupplements
    digitalCameras
    diyMaterials
    diyToolsWorkshopEquipment
    dogSupplies
    dollsClothingAccessories
    dollsMiniaturesHouses
    dollsTeddyBears
    drillBits
    dumbbells
    duvets
    dvDs
    dvDsBluRays
    dvDsFilmsTv
    eCigsVapesMods
    eELiquidsCigaretteCartridges
    electricBikes
    electricGuitars
    electricShavers
    electricToothbrushHeads
    electricToothbrushes
    electricalBuildingMaterialsSupplies
    electricalEquipmentSupplies
    electronicComponentsSemiconductors
    enduranceEnergyBarsShakesPills
    epilatorsElectrolysis
    epsonInkCartridges
    equestrianEquipment
    equipmentPartsAccessories
    eroticClothing
    europeanStamps
    everythingElse
    eyeMakeUp
    fabric
    faceMakeUp
    facialMoisturisers
    facialSkinCareAloeVeraGel
    facialSkinCareProducts
    facilityBathroomRefuse
    facilityMaintenanceSafety
    fancyDressPeriodCostumes
    farmImplementsEquipment
    fictionBooks
    filmMemorabilia
    filmPhotographyEquipment
    fineJewellery
    firstAidSupplies
    fishAquariumSupplies
    fishingBoats
    fishingEquipment
    fitnessRunningYogaEquipment
    foodTrucksConcessionTrailers
    foodTrucksTrailersCarts
    footCreamsTreatments
    footballMemorabilia
    footballProgrammes
    fragrancesAftershaves
    fragrancesAftershavesForMen
    fragrancesForChildren
    fragrancesForWomen
    freshCutFlowers
    furniture
    games
    garageEquipmentTools
    gardenPatio
    gardenPatioFurniture
    gardenPowerToolsEquipment
    gardenStructuresShadeEquipment
    garminGpsRunningWatches
    gelNailPolish
    giftWrappingSupplies
    girlsClothingShoesAccessories
    glass
    golfEquipment
    greatBritainStamps
    guitarsBasses
    hairCareStylingProducts
    hairClippersTrimmers
    hairColourants
    hairDryers
    hairExtensionWigs
    hairLossTreatments
    hairStraightenersCurlingTongs
    handNailTreatmentCreams
    handSanitisers
    handTools
    handWashes
    handpiecesInstruments
    headphones
    healthBeauty
    healthcareLabDental
    healthcareProducts
    heatPresses
    herbBotanicalSupplements
    herbalRemediesResins
    historicalMedalsMedallions
    hoistsWinchesRigging
    homeAppliances
    homeAudioSystems
    homeBedding
    homeCookwareDiningBarSupplies
    homeDecorItems
    homeLighting
    homeMeasuringLayoutTools
    homeOfficeFurniture
    homePhonesAccessories
    homeSpeakersSubwoofers
    hotColdTherapies
    householdLaundrySupplies
    hpInkCartridges
    iPhoneXPhones
    industrialBindingFinishingEquipment
    industrialCuttingSawingTools
    industrialDrillingTools
    industrialEngineeringTools
    industrialFireProtectionEquipment
    industrialGenerators
    industrialHandTools
    industrialMeasuringTools
    industrialPliers
    industrialPowerDrillsBitsAccessories
    industrialPowerGrindersAccessories
    industrialPowerSandersAccessories
    industrialPowerSawsSawBlades
    industrialPowerSupplies
    industrialPowerToolBatteriesChargers
    industrialPowerToolRoutersAccessories
    industrialPowerTools
    industrialPrintingGraphicArtsEquipment
    industrialScrewdrivers
    industrialSpanners
    industrialSwitches
    industrialTools
    industrialVices
    industrialWireStrippersCutters
    isopropylAlcohol
    jewelleryBoxesSupplies
    jewelleryWatches
    keyboardsPianos
    kidsClothesShoesAccessories
    laptopDesktopAccessories
    laptopsNetbooks
    laserDiscFilms
    latexDisposableGloves
    lawnMowers
    leatherSofasArmchairsCouches
    legoStarWarsMinifigures
    levelsSurveyingEquipment
    lipMakeUpProducts
    magazines
    magneticTherapyDevices
    makeUpCasesBags
    makeUpProducts
    makeUpToolsAccessories
    manicurePedicureSupplies
    manicurePedicureToolsKits
    materialHandling
    mattressToppersProtectors
    medicalLabCaregivingFurniture
    medicalLabDentalSupplies
    medicalLabEquipmentAttachmentsAccessories
    medicalLabEquipmentDevices
    medicalMobility
    medicalMonitoringTestingKits
    memorabiliaFootballShirts
    mensAccessories
    mensActivewear
    mensBags
    mensBelts
    mensBoots
    mensCasualShoes
    mensClothing
    mensCoatsJackets
    mensFormalShoes
    mensHats
    mensJeans
    mensJewellery
    mensSandalsBeachShoes
    mensShirtsTops
    mensShoes
    mensSlippers
    mensSunglassesSunglassesAccessories
    mensTShirts
    mensTiesBowTiesCravats
    mensTrainers
    mensTrousers
    mensUnderwear
    mensWallets
    metalworkingEquipment
    metalworkingSupplies
    militaria
    mixedMakeUpItems
    mobilePhoneAccessories
    mobilePhoneParts
    mobilePhonesSmartWatchesAccessoriesCommunication
    mobilePhonesSmartphones
    mobilityFurnitureFixtures
    mobilityScooters
    mobilityWalkingEquipment
    modelRailwaysTrains
    motorSportMemorabilia
    motorcyclesScooters
    multipurposeBatteriesPowerSupplies
    music
    musicCDs
    musicCassettes
    musicMemorabilia
    musicStorageMediaAccessories
    musicalInstruments
    nailArtAccessories
    nailPolish
    naturalAlternativeRemedies
    nitrileDisposableGloves
    nonFictionBooks
    nurseryBedding
    nurseryDecorationFurniture
    officeChairs
    officeEquipment
    officeEquipmentSupplies
    officeFurniture
    officeSuppliesStationery
    oilNaturalRemedies
    ooGaugeModelRailwayLocomotives
    oralBElectricToothbrushHeads
    oralDentalCareProducts
    orthopaedicProductsSupports
    otherClothes
    otherFacialSkinCareProducts
    otherFilmFormats
    otherIndustrialMasksRespirators
    otherMaterialHandling
    otherMobilityDisabilityMedicalEquipment
    otherMusicFormats
    otherOralDentalCareProducts
    otherVitaminsDietarySupplements
    overTheCounterMedicationsTreatments
    packingShipping
    paintingDrawingArtSupplies
    partySupplies
    pcDesktopsAllInOneComputers
    percussionInstruments
    performanceDjEquipment
    personalProtectiveEquipmentPpe
    petSupplies
    plantCareSuppliesSoilAccessories
    plantsSeedsBulbs
    plasticLegoCompleteSetsPacks
    plumbingMaterialsSupplies
    porcelainChina
    portableAudioEquipmentHeadphones
    pottery
    potteryPorcelainGlass
    poultryWaterfowlSupplies
    powerToolAirToolAccessories
    powerTools
    presentationAVEquipmentProjectors
    printingGraphicEssentials
    proAudioEquipment
    processEngineeringEquipment
    property
    publicSafetyStaffEquipment
    pushchairsPramsAccessories
    radioCommunicationEquipment
    rawMaterials
    razorsRazorBlades
    rcModelVehiclesRemoteControlledToys
    rcPartsAccessories
    restaurantFoodService
    restaurantFurnitureSignsDecor
    rockMusicCDs
    roofingMaterialsSupplies
    rugs
    safetySignsTrafficControl
    scaffoldingLadders
    screenSpecialtyPrintingEquipmentSupplies
    seasonalDecorations
    sewingToolsSupplies
    shampoosConditioners
    shavingCreamsFoamsGels
    shavingHairRemovalProductsEquipment
    sheets
    showerBathAccessories
    showersBathsParts
    signMakingSupplies
    skinCleansersToners
    skinMasksPeels
    smallAnimalSupplies
    smartwatches
    sofasArmchairsCouches
    sofasArmchairsCouchesSofaBedFunction
    soundVision
    sportingGoods
    sportsMemorabilia
    sportsTradingCardsAccessories
    stampPublicationsSupplies
    stamps
    stoneware
    stringInstruments
    subbuteo
    sylvanianFamiliesDolls
    tables
    tabletEReaderAccessories
    teddyBears
    teethWhiteningProducts
    telescopesBinoculars
    testMeasurementInspection
    testMeasurementInspectionCamerasImagingEquipment
    testMeasurementInspectionEquipment
    testMetersDetectors
    testersCalibrators
    textbooksEducationalReferenceBooks
    tobaccianaSmokingSupplies
    toiletsBidets
    tokenCoins
    toolBoxesStorage
    toothpaste
    toysGames
    tractors
    tradeShowDisplaysStands
    transportationCollectables
    tvHomeAudioAccessories
    tvMemorabilia
    tvReceptionSetTopBoxes
    unisexFragrances
    unisexKidsClothingShoesAccessories
    unisexVitaminsMinerals
    upvcHomeWindows
    vaporizers
    vehiclePartsAccessories
    vhsFilms
    videoGameAccessories
    videoGameConsoles
    videoGameMerchandise
    videoGameReplacementPartsTools
    videoGames
    videoGamesConsoles
    vintageAntiqueJewellery
    vintageClothingAccessories
    vinylCutters
    vinylRecords
    virtualCurrencyMinersMiningContracts
    vitaminsDietarySupplements
    vitaminsMineralsHealthSupplements
    wardrobes
    warehouseCartsTrucks
    warehouseLoadingUnloading
    wargamesRolePlayingGames
    warhammer_40KMiniatures
    watches
    watchesPartsAccessories
    waxingSuppliesForHairRemoval
    weddingFormalOccasionClothing
    weightLossProductsSlimmingAids
    weldingSolderingEquipment
    wheelchairs
    windWoodwindInstruments
    windowCurtainsDrapes
    wireCableConduit
    wireCableConnectors
    womensAccessories
    womensBagsHandbags
    womensBelts
    womensBikes
    womensBoots
    womensClothing
    womensCoatsJacketsWaistcoats
    womensDresses
    womensFlats
    womensHairAccessories
    womensHats
    womensHeels
    womensJumpersCardigans
    womensLingerieNightwear
    womensPursesWallets
    womensSandals
    womensScarvesShawls
    womensShoes
    womensSkirts
    womensSlippers
    womensSunglassesAccessories
    womensTopsShirts
    womensTrainers
    woodworkingSupplies
    workshopEquipment
    worldwideStamps
    wristwatches
    yarnSewingNeedlecraftSupplies
  }
`