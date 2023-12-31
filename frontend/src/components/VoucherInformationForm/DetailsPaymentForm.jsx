import React, { useState } from 'react';

import '../../css.css'

export const DetailsPaymentForm = ({ taxPayerParty, partyDetails, nextHandler, backHandler}) => {
  

  const taxCategories = [   
    {
      index:1,
      description: 'Interest on foreign loans payable to Non-Resident Foreign Corporations (NRFCs)',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC180',
      tax: taxPayerParty.class === 'individual' ? 0 : .20,
    },
    {
      index:2,
      description: 'Interest and other income payments on foreign currency transactions/loans payable to Offshore Banking Units (OBUS)',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC190',
      tax: taxPayerParty.class === 'individual' ? 0 : .10,
    },
    {
      index:3,
      description: 'Interest and other income payments on foreign currency transactions/loans payable to Foreign Currency Deposit Units (FCDUs)',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC191',
      tax: taxPayerParty.class === 'individual' ? 0 : .10,
    },
    {
      index:4,
      description: 'Cash dividend payment by domestic corporation to citizens and resident aliens/NRFCs',
      atc: taxPayerParty.class === 'individual' ? 'WI202' : 'WC212',
      tax: taxPayerParty.class === 'individual' ? .10 : .30,
    },
    {
      index:5,
      description: 'Property dividend payment by domestic corporation to citizens and resident aliens/NRFCs',
      atc: taxPayerParty.class === 'individual' ? 'WI203' : 'WC213',
      tax: taxPayerParty.class === 'individual' ? .10 : .30,
    },
    {
      index:6,
      description: 'Cash dividend payment by domestic corporation to NRFCs whose countries allowed tax deemed paid credit (subject to tax sparing rule)',
      atc: taxPayerParty.class === 'individual' ? '0' : 'WC222',
      tax: taxPayerParty.class === 'individual' ? 0 : .15,
    },
    {
      index:7,
      description: 'Property dividend payment by domestic corporation to NRFCs whose countries allowed tax deemed paid credit (subject to tax sparing rule)',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC223',
      tax: taxPayerParty.class === 'individual' ? 0 : .15,
    },
    {
      index:8,
      description: 'Cash dividend payment by domestic corporation to Non-resident Alien engage in Trade or Business within the Philippines (NRAETB)',
      atc: taxPayerParty.class === 'individual' ? 'WC224' : '',
      tax: taxPayerParty.class === 'individual' ? .20 : 0,
    },
    {
      index:9,
      description: 'Property dividend payment by domestic corporation to NRAETB',
      atc: taxPayerParty.class === 'individual' ? 'WI225' : '',
      tax: taxPayerParty.class === 'individual' ? .20 : 0,
    },
    {
      index:10,
      description: 'Share of NRAETB in the distributable net income after tax of a partnership (except General Professional Partnership) of which he is a partner, or share in the net income after tax of an association, joint account or a joint venture taxable as a corporation of which he is a member or a co-venturer',
      atc: taxPayerParty.class === 'individual' ? 'WI226' : '',
      tax: taxPayerParty.class === 'individual' ? .20 : 0,
    },
    {
      index:11,
      description: 'On other payments to NRFCs',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC230',
      tax: taxPayerParty.class === 'individual' ? 0 : .30,
      
    },
    {
      index:12,
      description: 'Distributive share of individual partners in a taxable partnership, association, joint account or joint venture or consortium',
      atc: taxPayerParty.class === 'individual' ? 'WI240' : '',
      tax: taxPayerParty.class === 'individual' ? .10 : 0,
    },
    {
      index:13,
      description: 'All kinds of royalty payments to citizens, residents aliens and NRAETB (other than W1380 and WI341), domestic and resident foreign corporations',
      atc: taxPayerParty.class === 'individual' ? 'WI250' : 'WC250',
      tax: taxPayerParty.class === 'individual' ? .20 : .20,
    },
    {
      index:14,
      description: 'On prizes exceeding P10,000 and other winnings paid to individuals',
      atc: taxPayerParty.class === 'individual' ? 'WI260' : '',
      tax: taxPayerParty.class === 'individual' ? .20 : 0,
    },
    {
      index:15,
      description: 'Branch profit remittances by all corporations except PEZA/SBMA/CDA registered',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC280',
      tax: taxPayerParty.class === 'individual' ? 0 : .15,
    },
    {
      index:16,
      description: 'On the gross rentals, lease and charter fees derived by non-resident owner or lessor of foreign vessels',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC290',
      tax: taxPayerParty.class === 'individual' ? 0 : .045,
    },
    {
      index:17,
      description: 'On the gross rentals, charters and other fees derived by non-resident lessor or aircraft, machineries and equipment',
      atc: taxPayerParty.class === 'individual' ? '' : 'WC300',
      tax: taxPayerParty.class === 'individual' ? 0 : .075,
    },
    {
      index:18,
        description:'On payments to oil exploration service contractors/sub-contractors',
        atc: taxPayerParty.class === 'individual' ? 'WI310' : 'WC310', 
        tax: taxPayerParty.class === 'individual' ? .08 : .08,
    },
    {
      index:19,
      description: 'Payments to Non-resident alien not engage in trade or business within the Philippines (NRANETB) except on sale of shares in domestic corporation and real property',
      atc: taxPayerParty.class === 'individual' ? 'WI330' : '',
      tax: taxPayerParty.class === 'individual' ? .25 : 0,
    },
    {
      index:20,
      description: 'On payments to non-resident individual/foreign corporate cinematographic film owners, lessors or distributors',
      atc: taxPayerParty.class === 'individual' ? 'WI340' : 'WC340',
      tax: taxPayerParty.class === 'individual' ? .25 : .25,
    },
    {
      index:21,
        description:'Royalties paid to NRAETB on cinematographic films and similar works',
        atc: taxPayerParty.class === 'individual' ? 'WI341' : '',
        tax: taxPayerParty.class === 'individual' ? .25 : 0,
    },
    {
      index:22,
      description: 'Final tax on interest or other payments upon tax-free covenant bonds, mortgages, deeds of trust or other obligations under Sec. 57C of the National Internal Revenue Code of 1997, as amended',
      atc: taxPayerParty.class === 'individual' ? 'WI350' : '',
      tax: taxPayerParty.class === 'individual' ? .30 : 0,
    },
    {
      index:23,
      description: 'Royalties paid to citizens, resident aliens and NRAETB on books, other literary works and musical compositions',
      atc: taxPayerParty.class === 'individual' ? 'WI380' : '',
      tax: taxPayerParty.class === 'individual' ? .10 : 0,
    },
    {
      index:24,
        description: 'Informers Cash Reward to individuals/juridical persons',
        atc: taxPayerParty.class === 'individual' ? 'WI410' : 'WC410',
        tax: taxPayerParty.class === 'individual' ? .10 : .10,
    },
    {
      index:25,
      description: 'Cash or property dividend paid by a Real Estate Investment Trust (REIT)',
      atc: taxPayerParty.class === 'individual' ? 'WI700' : 'WC700',
      tax: taxPayerParty.class === 'individual' ? .10 : .10,
    },
  ];
  const [amounts, setAmounts] = useState({});

  const handleAmountChange = (index, value) => {
    setAmounts((prevAmounts) => ({ ...prevAmounts, [index]: value }));
  };

  const handleSubmit = () => {
    const rowsWithAmounts = taxCategories
      .filter((categ) => amounts[`${categ.index}`] > 0)
      .map((categ) => ({
        ...categ,
        amount: parseFloat(amounts[`${categ.index}`]),
    }));
    
    partyDetails(rowsWithAmounts)
    
    nextHandler()
  };
  
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">ATC</th>
            <th className="px-4 py-2">Tax Rate</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {taxCategories.map((categ) => (
            <tr key={categ.index}>
              <td className="border px-4 py-2">{categ.description}</td>
              <td className="border px-4 py-2">{categ.atc}</td>
              <td className="border px-4 py-2">{categ.tax}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={amounts[categ.index] || ''}
                  onChange={(e) => handleAmountChange(categ.index, e.target.value)}
                  className="w-full px-2 py-1 border"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center gap-2'>
        <button
          onClick={() => backHandler()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
          Next
        </button>
        
      </div>
    </div>
  );
};

