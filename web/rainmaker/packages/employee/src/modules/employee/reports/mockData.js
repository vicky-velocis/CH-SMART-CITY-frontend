const mockData = {
  requestInfo: {
    apiId: 'org.egov.pt',
    ver: '1.0',
    ts: 'Tue Jun 27 05:00:12 GMT 2017',
    resMsgId: 'uief87324',
    msgId: '654654',
    status: '200',
  },
  tenantId: 'default',
  reportDetails: {
    reportName: 'DumpingGroundDetailReport',
    serialNo: false,
    sorting: true,
    searchFilter: false,
    viewPath: null,
    selectiveDownload: false,
    summary: 'Dumping Ground Details report',
    reportHeader: [
      {
        name: 'dumpinggroundname',
        label: 'reports.swm.dumpingground',
        type: 'string',
        defaultValue: null,
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'date',
        label: 'reports.swm.date',
        type: 'string',
        defaultValue: null,
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'wetwastecollected',
        label: 'reports.swm.wetwaste',
        type: 'number',
        defaultValue: null,
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'drywastecollected',
        label: 'reports.swm.drywaste',
        type: 'number',
        defaultValue: null,
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
    ],
    searchParams: [
      {
        name: 'dumpinggroundcode',
        label: 'reports.swm.dumpingground',
        type: 'singlevaluelist',
        defaultValue: {
          'DumpingGround-1515051215814': 'abcd',
          'DumpingGround-1515410175062': 'Test 1',
          'DumpingGround-1516774180587': '??????',
          'DumpingGround-1515241287982': 'sasad',
          'DG Code 1': 'Trimbak Muncipal Council',
          'DG Code 2': 'Fake dumping ground 2',
          'DumpingGround-1516253414973': 'DNG 3',
          'DumpingGround-1515141927222': 'dfg',
          'DumpingGround-1515576917041': '54657',
          'DumpingGround-1515692013245': 'Ground Name',
          'DumpingGround-1516352911462': 'DG Test 909',
          'DumpingGround-1515752407324': 'Pnb',
          'DumpingGround-1515772494106': 'dUMP 10',
          'DumpingGround-1515498678538': 'Dump 9',
          'DumpingGround-1515498270470': 'DG1',
          'DumpingGround-1515511182385': 'qwerty',
          'DumpingGround-1515594099399': 'erewr',
          'DumpingGround-1515058487254': 'Test2',
          'DumpingGround-1515052292849': 'TEST XYZZ',
          'DumpingGround-1515086866208': 'xyz',
          'DumpingGround-1516352364188': 'Hafeezpet',
          'DumpingGround-1516261047951': 'ABCD',
          'DumpingGround-1515050513105': '',
          'DumpingGround-1515682032423': 'Test 404',
          'DumpingGround-1516352654154': 'Miypaur -III',
          'DumpingGround-1516274243769': 'Dump 101',
          'DumpingGround-1517210911850': 'DG Test 0001',
          'DumpingGround-1516714732840': 'fdsfsd',
          'DumpingGround-1517407442957': 'fdbvdfb',
          'DumpingGround-1515669363633': 'DP 301',
          'DumpingGround-1515496983960': 'Dump 6',
          'DumpingGround-1515510456037': 'JNTU',
          'DumpingGround-1515571906341': 'test abc',
          'DumpingGround-1515576696918': '456',
          'DumpingGround-1515047138226': 'Test5',
          'DumpingGround-1515682436178': 'Test 606',
          'DumpingGround-1516180027948': 'DGN1',
          'DumpingGround-1514988115500': 'Waste Test1',
          'DumpingGround-1516355082748': 'Kukatpally',
          'DumpingGround-1515667847132': 'DP 201',
          'DumpingGround-1515508859554': 'xyzzzz',
          'DumpingGround-1516356469112': 'Dump 102',
          'DumpingGround-1515572126018': 'test abc',
          'DumpingGround-1515497975650': 'Dump 8',
          'DumpingGround-1515754027503': 'Dump 1',
          'DumpingGround-1515044610349': 'Test 4',
          'DumpingGround-1515666926022': 'DP 101',
          'DumpingGround-1515682259052': 'Test 505',
          'DumpingGround-1515497597964': 'test ground',
          'DumpingGround-1516254797390': 'Dump 15',
          'DumpingGround-1516254467285': 'DNG 5',
          'DumpingGround-1515572852960': '234234',
          'DumpingGround-1515670318729': 'Test 101',
          'DumpingGround-1515063607649': 'xzc',
          'DumpingGround-1516876649972': 'Dump_501',
          'DumpingGround-1515680530754': 'Test 202',
          'DumpingGround-1515566698236': 'TestDG',
          'DumpingGround-1515753933306': 'Dump',
          'DumpingGround-1515154098084': 'MH Dumping Ground One',
          'DumpingGround-1515486265225': 'Dump 2',
          'DumpingGround-1515059661822': 'Test 5 ',
          'DumpingGround-1515494260933': 'Dump 5',
          'DumpingGround-1515573002907': '654',
          'DumpingGround-1516260866623': 'ABAB',
          'DumpingGround-1516273208775': 'Dump 100',
          'DumpingGround-1515141251745': 'Dupm 1',
          'DumpingGround-1515056086418': 'Unit 1',
          'DumpingGround-1515774283403': 'Police gorund',
          'DumpingGround-1516880521908': 'Dump_502',
          'DumpingGround-1515058965273': 'Test 4',
          'DumpingGround-1515243828306': 'erewr',
          'DumpingGround-1515506833229': 'test 123',
          'DumpingGround-1516692045192': 'Ambernath Dumping Ground',
          'DumpingGround-1516260563462': 'asdfv',
          'DumpingGround-1515759011146': 'Dump 3',
          'DumpingGround-1517390887762': 'New Dumping Ground - 30012018',
          'DumpingGround-1515509439651': 'test 12345678',
          'DumpingGround-1515676693816': 'Dumbing',
          'DumpingGround-1516253819155': 'DNG 4',
          'DumpingGround-1515508968288': 'test on V Machine',
          'DumpingGround-1516276209941': 'HyDumping',
          'DumpingGround-1515059286172': 'Test 44',
          'DumpingGround-1514973406014': 'Test 1',
          'DumpingGround-1516256253382': 'DNG 6',
          'DumpingGround-1513861139509': 'Dg 4000',
          'DumpingGround-1514987736095': 'Test23',
          'DumpingGround-1515503898060': 'Nalasopara',
          'DumpingGround-1515510261512': 'Gadar',
          'DumpingGround-1516776412928': 'Dump_500',
          'DumpingGround-1513848687844': 'Trimbak Muncipal Council 2',
          'DumpingGround-1515577261023': 'dr fgchfg',
          'DumpingGround-1516197739674': 'DNG2',
          'DumpingGround-1515664858372': 'Dump 1',
          'DumpingGround-1517407385000': 'nfgn',
          'DumpingGround-1516098014869': 'Dump23',
          'DumpingGround-1515088854653': 'new ground',
          'DumpingGround-1515094189862': 'TestDG',
          'DumpingGround-1515231773363': 'tet',
        },
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'wasteprocess',
        label: 'reports.swm.wasteprocess',
        type: 'singlevaluelist',
        defaultValue: {
          false: 'Dump',
          true: 'Process',
        },
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'wastetype',
        label: 'reports.swm.wastetype',
        type: 'singlevaluelist',
        emptyIfNotSet: true,
        defaultValue: {
          Wet: 'Wet',
          Dry: 'Dry',
        },
        isMandatory: false,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'fromDate',
        label: 'reports.swm.datefrom',
        type: 'epoch',
        defaultValue: null,
        isMandatory: true,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
      {
        name: 'toDate',
        label: 'reports.swm.dateto',
        type: 'epoch',
        defaultValue: null,
        isMandatory: true,
        showColumn: true,
        total: false,
        rowTotal: null,
        columnTotal: null,
      },
    ],
  },
};

export default mockData;
