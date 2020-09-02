const DATA = [
  {
      "_id": "adventureworks2014.AWBuildVersion",
      "columnsInfo": [
        {
          "columnName": "root",
          "path": "root",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 1,
          "dataType": "ObjectNode",
          "parent": null
        },
        {
          "columnName": "SystemInformationID",
          "path": "root|SystemInformationID",
          "cardinality": {
            "$numberLong": "1"
          },
          "depth": 2,
          "dataType": "Long",
          "parent": "root"
        },
        {
          "columnName": "VersionDate",
          "path": "root|VersionDate",
          "cardinality": {
            "$numberLong": "1"
          },
          "depth": 2,
          "dataType": "Long",
          "parent": "root"
        },
        {
          "columnName": "Database Version",
          "path": "root|Database Version",
          "cardinality": {
            "$numberLong": "1"
          },
          "depth": 2,
          "dataType": "String",
          "parent": "root"
        },
        {
          "columnName": "ModifiedDate",
          "path": "root|ModifiedDate",
          "cardinality": {
            "$numberLong": "1"
          },
          "depth": 2,
          "dataType": "String",
          "parent": "root"
        }
      ]
    },
    {
      "_id": "adventureworks2014.Address",
      "columnsInfo": [
        {
          "columnName": "root",
          "path": "root",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 1,
          "dataType": "ObjectNode"
        },
        {
          "columnName": "srid",
          "path": "root|SpatialLocation|srid",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 3,
          "dataType": "NullNode"
        },
        {
          "columnName": "AddressLine1",
          "path": "root|AddressLine1",
          "cardinality": {
            "$numberLong": "13597"
          },
          "depth": 2,
          "dataType": "String"
        },
        {
          "columnName": "SpatialLocation",
          "path": "root|SpatialLocation",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 2,
          "dataType": "ObjectNode"
        },
        {
          "columnName": "StateProvinceID",
          "path": "root|StateProvinceID",
          "cardinality": {
            "$numberLong": "74"
          },
          "depth": 2,
          "dataType": "Long",
          "relations": [
            {
              "intersectionScore": 0.0040650406504065045,
              "column": "root|CurrencyRateID",
              "source": "adventureworks2014.CurrencyRate"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|BOMLevel",
              "source": "adventureworks2014.BillOfMaterials"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|BillOfMaterialsID",
              "source": "adventureworks2014.BillOfMaterials"
            },
            {
              "intersectionScore": 0.1951219512195122,
              "column": "root|MinOrderQty",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.3170731707317073,
              "column": "root|AverageLeadTime",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 1,
              "column": "root|StateProvinceID",
              "source": "adventureworks2014.SalesTaxRate"
            },
            {
              "intersectionScore": 0.5,
              "column": "root|SalesTaxRateID",
              "source": "adventureworks2014.SalesTaxRate"
            },
            {
              "intersectionScore": 0.3333333333333333,
              "column": "root|ProductCategoryID",
              "source": "adventureworks2014.ProductSubcategory"
            },
            {
              "intersectionScore": 0.04838709677419355,
              "column": "root|duration",
              "source": "financial.loan"
            },
            {
              "intersectionScore": 0.4375,
              "column": "root|StateProvinceID",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.8125,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.3048780487804878,
              "column": "root|ContactTypeID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 1,
              "column": "root|JobCandidateID",
              "source": "adventureworks2014.JobCandidate"
            },
            {
              "intersectionScore": 0.0005608524957936063,
              "column": "root|ProductID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.24340998317442514,
              "column": "root|ReferenceOrderLineID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.010095344924284913,
              "column": "root|ReferenceOrderID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.26247896803140774,
              "column": "root|Quantity",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.0028042624789680315,
              "column": "root|TransactionID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.125,
              "column": "root|SpecialOfferID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.07851934941110487,
              "column": "root|SalesReasonID",
              "source": "adventureworks2014.SalesOrderHeaderSalesReason"
            },
            {
              "intersectionScore": 0.15384615384615385,
              "column": "root|SalariedFlag",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.5,
              "column": "root|SickLeaveHours",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.15384615384615385,
              "column": "root|CurrentFlag",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.3076923076923077,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.34615384615384615,
              "column": "root|VacationHours",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.2966909702748177,
              "column": "root|StockedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.005608524957936063,
              "column": "root|ScrappedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.2989343802579921,
              "column": "root|OrderQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.0028042624789680315,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.29584352078239606,
              "column": "root|district_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.007334963325183374,
              "column": "root|account_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 1,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.SalesTerritoryHistory"
            },
            {
              "intersectionScore": 0.002243409983174425,
              "column": "root|PhoneNumberTypeID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.0033651149747616375,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.15384615384615385,
              "column": "root|ShiftID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.07692307692307693,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.8076923076923077,
              "column": "root|DepartmentID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|Primary",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.2,
              "column": "root|ProductPhotoID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.0033651149747616375,
              "column": "root|AddressID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.002243409983174425,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 1,
              "column": "root|DepartmentID",
              "source": "adventureworks2014.Department"
            },
            {
              "intersectionScore": 0.01639344262295082,
              "column": "root|account_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.00819672131147541,
              "column": "root|client_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.00819672131147541,
              "column": "root|disp_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.0023014959723820483,
              "column": "root|CreditCardID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 1,
              "column": "root|FolderFlag",
              "source": "adventureworks2014.Document"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|FinishedGoodsFlag",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|ReorderPoint",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|MakeFlag",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.28888888888888886,
              "column": "root|ProductSubcategoryID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.3111111111111111,
              "column": "root|ProductModelID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|DaysToManufacture",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.08524957936062816,
              "column": "root|OperationSequence",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.09478407178911946,
              "column": "root|LocationID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.002243409983174425,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.28154795288839035,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.0033651149747616375,
              "column": "root|CustomerID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.25773195876288657,
              "column": "root|Bin",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.41237113402061853,
              "column": "root|LocationID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.08247422680412371,
              "column": "root|Quantity",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "PostalCode",
          "path": "root|PostalCode",
          "cardinality": {
            "$numberLong": "672"
          },
          "depth": 2,
          "dataType": "String"
        },
        {
          "columnName": "ModifiedDate",
          "path": "root|ModifiedDate",
          "cardinality": {
            "$numberLong": "1265"
          },
          "depth": 2,
          "dataType": "String",
          "relations": [
            {
              "intersectionScore": 0.4634146341463415,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.CurrencyRate"
            },
            {
              "intersectionScore": 0.0975609756097561,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.08571428571428572,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.ProductCostHistory"
            },
            {
              "intersectionScore": 0.12195121951219512,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.32641615255187884,
              "column": "root|TransactionDate",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.32641615255187884,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.041666666666666664,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.6758272574312956,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.SalesOrderHeaderSalesReason"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.770611329220415,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.5737521031968592,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.15384615384615385,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.044444444444444446,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.5900168255748738,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.5949367088607594,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.5490745933819405,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.020618556701030927,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "wkb",
          "path": "root|SpatialLocation|wkb",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 3,
          "dataType": "String"
        },
        {
          "columnName": "AddressID",
          "path": "root|AddressID",
          "cardinality": {
            "$numberLong": "19641"
          },
          "depth": 2,
          "dataType": "Long",
          "relations": [
            {
              "intersectionScore": 0.01951219512195122,
              "column": "root|CurrencyRateID",
              "source": "adventureworks2014.CurrencyRate"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|ComponentID",
              "source": "adventureworks2014.BillOfMaterials"
            },
            {
              "intersectionScore": 0.0205761316872428,
              "column": "root|BillOfMaterialsID",
              "source": "adventureworks2014.BillOfMaterials"
            },
            {
              "intersectionScore": 0.05761316872427984,
              "column": "root|ProductAssemblyID",
              "source": "adventureworks2014.BillOfMaterials"
            },
            {
              "intersectionScore": 0.07317073170731707,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.2,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductCostHistory"
            },
            {
              "intersectionScore": 0.25,
              "column": "root|StateProvinceID",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.024390243902439025,
              "column": "root|PersonID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.024390243902439025,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.015873015873015872,
              "column": "root|SalesPersonID",
              "source": "adventureworks2014.Store"
            },
            {
              "intersectionScore": 0.031746031746031744,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Store"
            },
            {
              "intersectionScore": 0.016264722378014584,
              "column": "root|ProductID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.0033651149747616375,
              "column": "root|ReferenceOrderLineID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.09871003925967471,
              "column": "root|ReferenceOrderID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.006730229949523275,
              "column": "root|Quantity",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.09590577678070668,
              "column": "root|TransactionID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.14583333333333334,
              "column": "root|ProductID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.11538461538461539,
              "column": "root|SickLeaveHours",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.11538461538461539,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|VacationHours",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.07692307692307693,
              "column": "root|HireDate",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.009534492428491307,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.012338754907459339,
              "column": "root|StockedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.0005608524957936063,
              "column": "root|ScrappedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.011777902411665733,
              "column": "root|OrderQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.0975883342680875,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.014669926650366748,
              "column": "root|district_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.014669926650366748,
              "column": "root|account_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.04318564217610768,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.07692307692307693,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.13333333333333333,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.09702748177229388,
              "column": "root|AddressID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.045989904655075714,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.028688524590163935,
              "column": "root|account_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.022540983606557378,
              "column": "root|client_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.02663934426229508,
              "column": "root|disp_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.039700805523590336,
              "column": "root|CreditCardID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.047180667433831994,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|ProductID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|ProductModelID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.005608524957936063,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.06730229949523275,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.0033651149747616375,
              "column": "root|StoreID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.0538418395961862,
              "column": "root|PersonID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.09534492428491306,
              "column": "root|CustomerID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.10309278350515463,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.010309278350515464,
              "column": "root|Bin",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.041237113402061855,
              "column": "root|Quantity",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "AddressLine2",
          "path": "root|AddressLine2",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 2,
          "dataType": "String"
        },
        {
          "columnName": "rowguid",
          "path": "root|rowguid",
          "cardinality": {
            "$numberLong": "19685"
          },
          "depth": 2,
          "dataType": "String"
        },
        {
          "columnName": "City",
          "path": "root|City",
          "cardinality": {
            "$numberLong": "575"
          },
          "depth": 2,
          "dataType": "String",
          "relations": [
            {
              "intersectionScore": 0.010095344924284913,
              "column": "root|FirstName",
              "source": "adventureworks2014.Person"
            },
            {
              "intersectionScore": 0.0625,
              "column": "root|Name",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.047619047619047616,
              "column": "root|Name",
              "source": "adventureworks2014.CountryRegion"
            }
          ]
        }
      ]
    },
    {
      "_id": "adventureworks2014.AddressType",
      "columnsInfo": [
        {
          "columnName": "root",
          "path": "root",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 1,
          "dataType": "ObjectNode",
          "parent": null
        },
        {
          "columnName": "Name",
          "path": "root|Name",
          "cardinality": {
            "$numberLong": "6"
          },
          "depth": 2,
          "dataType": "String",
          "parent": "root"
        },
        {
          "columnName": "ModifiedDate",
          "path": "root|ModifiedDate",
          "cardinality": {
            "$numberLong": "1"
          },
          "depth": 2,
          "dataType": "String",
          "parent": "root"
        },
        {
          "columnName": "AddressTypeID",
          "path": "root|AddressTypeID",
          "cardinality": {
            "$numberLong": "6"
          },
          "depth": 2,
          "dataType": "Long",
          "parent": "root"
        },
        {
          "columnName": "rowguid",
          "path": "root|rowguid",
          "cardinality": {
            "$numberLong": "6"
          },
          "depth": 2,
          "dataType": "String",
          "parent": "root"
        }
      ]
    },
    {
      "_id": "adventureworks2014.BillOfMaterials",
      "columnsInfo": [
        {
          "columnName": "root",
          "path": "root",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 1,
          "dataType": "ObjectNode"
        },
        {
          "columnName": "BOMLevel",
          "path": "root|BOMLevel",
          "cardinality": {
            "$numberLong": "5"
          },
          "depth": 2,
          "dataType": "Long",
          "relations": [
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|StateProvinceID",
              "source": "adventureworks2014.Address"
            },
            {
              "intersectionScore": 0.6585365853658537,
              "column": "root|MinOrderQty",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.0975609756097561,
              "column": "root|OnOrderQty",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 1,
              "column": "root|TaxType",
              "source": "adventureworks2014.SalesTaxRate"
            },
            {
              "intersectionScore": 0.3333333333333333,
              "column": "root|ProductSubcategoryID",
              "source": "adventureworks2014.ProductSubcategory"
            },
            {
              "intersectionScore": 0.6666666666666666,
              "column": "root|ProductCategoryID",
              "source": "adventureworks2014.ProductSubcategory"
            },
            {
              "intersectionScore": 0.5,
              "column": "root|IsOnlyStateProvinceFlag",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.125,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.024390243902439025,
              "column": "root|ContactTypeID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.0205761316872428,
              "column": "root|ProductID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 1,
              "column": "root|ReferenceOrderLineID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.9670781893004116,
              "column": "root|Quantity",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.8541666666666666,
              "column": "root|SpecialOfferID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.9506172839506173,
              "column": "root|SalesReasonID",
              "source": "adventureworks2014.SalesOrderHeaderSalesReason"
            },
            {
              "intersectionScore": 0.5384615384615384,
              "column": "root|SalariedFlag",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 1,
              "column": "root|CurrentFlag",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.19230769230769232,
              "column": "root|OrganizationLevel",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.9670781893004116,
              "column": "root|StockedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.205761316872428,
              "column": "root|ScrappedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.9670781893004116,
              "column": "root|OrderQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.21810699588477367,
              "column": "root|district_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.9670781893004116,
              "column": "root|PhoneNumberTypeID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.9230769230769231,
              "column": "root|ShiftID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.11538461538461539,
              "column": "root|DepartmentID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 1,
              "column": "root|LocationID",
              "source": "adventureworks2014.Location"
            },
            {
              "intersectionScore": 1,
              "column": "root|Primary",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.6222222222222222,
              "column": "root|ProductPhotoID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.39094650205761317,
              "column": "root|AddressTypeID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 1,
              "column": "root|ChangeNumber",
              "source": "adventureworks2014.Document"
            },
            {
              "intersectionScore": 1,
              "column": "root|DocumentLevel",
              "source": "adventureworks2014.Document"
            },
            {
              "intersectionScore": 1,
              "column": "root|FolderFlag",
              "source": "adventureworks2014.Document"
            },
            {
              "intersectionScore": 1,
              "column": "root|Status",
              "source": "adventureworks2014.Document"
            },
            {
              "intersectionScore": 0.7555555555555555,
              "column": "root|FinishedGoodsFlag",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|ReorderPoint",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.6888888888888889,
              "column": "root|MakeFlag",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|ProductSubcategoryID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|ProductModelID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.5555555555555556,
              "column": "root|DaysToManufacture",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.9670781893004116,
              "column": "root|OperationSequence",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.6172839506172839,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.010309278350515464,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.20618556701030927,
              "column": "root|Bin",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.14432989690721648,
              "column": "root|LocationID",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "EndDate",
          "path": "root|EndDate",
          "cardinality": {
            "$numberLong": "0"
          },
          "depth": 2,
          "dataType": "Long"
        },
        {
          "columnName": "ComponentID",
          "path": "root|ComponentID",
          "cardinality": {
            "$numberLong": "325"
          },
          "depth": 2,
          "dataType": "Long",
          "relations": [
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|AddressID",
              "source": "adventureworks2014.Address"
            },
            {
              "intersectionScore": 0.14634146341463414,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.22857142857142856,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductCostHistory"
            },
            {
              "intersectionScore": 0.3333333333333333,
              "column": "root|ProductCategoryID",
              "source": "adventureworks2014.ProductSubcategory"
            },
            {
              "intersectionScore": 0.07317073170731707,
              "column": "root|PersonID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.036585365853658534,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.06349206349206349,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Store"
            },
            {
              "intersectionScore": 0.7654320987654321,
              "column": "root|ProductID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|ReferenceOrderLineID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.0411522633744856,
              "column": "root|ReferenceOrderID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|Quantity",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|TransactionID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.20833333333333334,
              "column": "root|ProductID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.020833333333333332,
              "column": "root|SpecialOfferID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|SalesReasonID",
              "source": "adventureworks2014.SalesOrderHeaderSalesReason"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|OrganizationLevel",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.6748971193415638,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.04526748971193416,
              "column": "root|StockedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|ScrappedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.0411522633744856,
              "column": "root|OrderQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|district_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|account_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.012345679012345678,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.1111111111111111,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.0411522633744856,
              "column": "root|AddressID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.0411522633744856,
              "column": "root|account_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|client_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|disp_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|CreditCardID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.2,
              "column": "root|ProductID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|SafetyStockLevel",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|DaysToManufacture",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.4074074074074074,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|OperationSequence",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.012345679012345678,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.03292181069958848,
              "column": "root|StoreID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|PersonID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.012345679012345678,
              "column": "root|CustomerID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.24742268041237114,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.010309278350515464,
              "column": "root|Bin",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.010309278350515464,
              "column": "root|LocationID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.07216494845360824,
              "column": "root|Quantity",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "BillOfMaterialsID",
          "path": "root|BillOfMaterialsID",
          "cardinality": {
            "$numberLong": "2707"
          },
          "depth": 2,
          "dataType": "Long",
          "relations": [
            {
              "intersectionScore": 0.0205761316872428,
              "column": "root|AddressID",
              "source": "adventureworks2014.Address"
            },
            {
              "intersectionScore": 0.07317073170731707,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.024390243902439025,
              "column": "root|OnOrderQty",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.05714285714285714,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductCostHistory"
            },
            {
              "intersectionScore": 0.0625,
              "column": "root|StateProvinceID",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.0625,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.StateProvince"
            },
            {
              "intersectionScore": 0.12195121951219512,
              "column": "root|PersonID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.04878048780487805,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.06349206349206349,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Store"
            },
            {
              "intersectionScore": 0.09465020576131687,
              "column": "root|ProductID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|ReferenceOrderLineID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.09465020576131687,
              "column": "root|ReferenceOrderID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.09053497942386832,
              "column": "root|Quantity",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.06584362139917696,
              "column": "root|TransactionID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.08333333333333333,
              "column": "root|ProductID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.020833333333333332,
              "column": "root|SpecialOfferID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|SalesReasonID",
              "source": "adventureworks2014.SalesOrderHeaderSalesReason"
            },
            {
              "intersectionScore": 0.07692307692307693,
              "column": "root|SickLeaveHours",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|BirthDate",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.11538461538461539,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|VacationHours",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.06995884773662552,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.12345679012345678,
              "column": "root|StockedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|ScrappedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.11522633744855967,
              "column": "root|OrderQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.07818930041152264,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.037037037037037035,
              "column": "root|district_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.06172839506172839,
              "column": "root|account_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.07818930041152264,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|DepartmentID",
              "source": "adventureworks2014.EmployeeDepartmentHistory"
            },
            {
              "intersectionScore": 0.06666666666666667,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.06666666666666667,
              "column": "root|ProductPhotoID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.03292181069958848,
              "column": "root|AddressID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.04526748971193416,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.09053497942386832,
              "column": "root|account_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.09053497942386832,
              "column": "root|client_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.09053497942386832,
              "column": "root|disp_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.09053497942386832,
              "column": "root|CreditCardID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.01646090534979424,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.08888888888888889,
              "column": "root|ProductID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|ReorderPoint",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.044444444444444446,
              "column": "root|ProductSubcategoryID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|ProductModelID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.04526748971193416,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.04938271604938271,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|StoreID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|TerritoryID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.07407407407407407,
              "column": "root|PersonID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.0205761316872428,
              "column": "root|CustomerID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.07216494845360824,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.030927835051546393,
              "column": "root|Bin",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.07216494845360824,
              "column": "root|Quantity",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "ProductAssemblyID",
          "path": "root|ProductAssemblyID",
          "cardinality": {
            "$numberLong": "238"
          },
          "depth": 2,
          "dataType": "Long",
          "relations": [
            {
              "intersectionScore": 0.05761316872427984,
              "column": "root|AddressID",
              "source": "adventureworks2014.Address"
            },
            {
              "intersectionScore": 0.21951219512195122,
              "column": "root|OnOrderQty",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.024390243902439025,
              "column": "root|MaxOrderQty",
              "source": "adventureworks2014.ProductVendor"
            },
            {
              "intersectionScore": 0.4857142857142857,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductCostHistory"
            },
            {
              "intersectionScore": 0.07317073170731707,
              "column": "root|PersonID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.0975609756097561,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityContact"
            },
            {
              "intersectionScore": 0.5,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductDocument"
            },
            {
              "intersectionScore": 0.07936507936507936,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.Store"
            },
            {
              "intersectionScore": 0.9094650205761317,
              "column": "root|ProductID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.06172839506172839,
              "column": "root|ReferenceOrderID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.0205761316872428,
              "column": "root|Quantity",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.06172839506172839,
              "column": "root|TransactionID",
              "source": "adventureworks2014.TransactionHistoryArchive"
            },
            {
              "intersectionScore": 0.375,
              "column": "root|ProductID",
              "source": "adventureworks2014.SpecialOfferProduct"
            },
            {
              "intersectionScore": 0.038461538461538464,
              "column": "root|BirthDate",
              "source": "adventureworks2014.Employee"
            },
            {
              "intersectionScore": 0.9053497942386831,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|StockedQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|OrderQty",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.06995884773662552,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrder"
            },
            {
              "intersectionScore": 0.053497942386831275,
              "column": "root|account_id",
              "source": "financial.account"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonPhone"
            },
            {
              "intersectionScore": 0.37777777777777777,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductProductPhoto"
            },
            {
              "intersectionScore": 0.04938271604938271,
              "column": "root|AddressID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.BusinessEntityAddress"
            },
            {
              "intersectionScore": 0.04938271604938271,
              "column": "root|account_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.06172839506172839,
              "column": "root|client_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.06172839506172839,
              "column": "root|disp_id",
              "source": "financial.disp"
            },
            {
              "intersectionScore": 0.04938271604938271,
              "column": "root|CreditCardID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 0.024691358024691357,
              "column": "root|BusinessEntityID",
              "source": "adventureworks2014.PersonCreditCard"
            },
            {
              "intersectionScore": 1,
              "column": "root|Document",
              "source": "adventureworks2014.Document"
            },
            {
              "intersectionScore": 0.2,
              "column": "root|ProductID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|Color",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|WeightUnitMeasureCode",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|ReorderPoint",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|Size",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|Weight",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|Class",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|SafetyStockLevel",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|ProductSubcategoryID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|ProductModelID",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|ProductLine",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|Style",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.17777777777777778,
              "column": "root|SizeUnitMeasureCode",
              "source": "adventureworks2014.Product"
            },
            {
              "intersectionScore": 0.6131687242798354,
              "column": "root|ProductID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.04938271604938271,
              "column": "root|WorkOrderID",
              "source": "adventureworks2014.WorkOrderRouting"
            },
            {
              "intersectionScore": 0.09053497942386832,
              "column": "root|StoreID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.05761316872427984,
              "column": "root|PersonID",
              "source": "adventureworks2014.Customer"
            },
            {
              "intersectionScore": 0.2268041237113402,
              "column": "root|ProductID",
              "source": "adventureworks2014.ProductInventory"
            },
            {
              "intersectionScore": 0.010309278350515464,
              "column": "root|Quantity",
              "source": "adventureworks2014.ProductInventory"
            }
          ]
        },
        {
          "columnName": "StartDate",
          "path": "root|StartDate",
          "cardinality": {
            "$numberLong": "19"
          },
          "depth": 2,
          "dataType": "String",
          "relations": [
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.Person"
            },
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|ModifiedDate",
              "source": "adventureworks2014.PersonPhone"
            }
          ]
        },
        {
          "columnName": "ModifiedDate",
          "path": "root|ModifiedDate",
          "cardinality": {
            "$numberLong": "27"
          },
          "depth": 2,
          "dataType": "String"
        },
        {
          "columnName": "PerAssemblyQty",
          "path": "root|PerAssemblyQty",
          "cardinality": {
            "$numberLong": "12"
          },
          "depth": 2,
          "dataType": "String",
          "relations": [
            {
              "intersectionScore": 0.02880658436213992,
              "column": "root|ReceivedQty",
              "source": "adventureworks2014.PurchaseOrderDetail"
            },
            {
              "intersectionScore": 0.022222222222222223,
              "column": "root|Weight",
              "source": "adventureworks2014.Product"
            }
          ]
        },
        {
          "columnName": "UnitMeasureCode",
          "path": "root|UnitMeasureCode",
          "cardinality": {
            "$numberLong": "3"
          },
          "depth": 2,
          "dataType": "String",
          "relations": [
            {
              "intersectionScore": 0.00411522633744856,
              "column": "root|PersonType",
              "source": "adventureworks2014.Person"
            },
            {
              "intersectionScore": 0.2682926829268293,
              "column": "root|UnitMeasureCode",
              "source": "adventureworks2014.ProductVendor"
            }
          ]
        }
      ]
    }
  ];

export {
  DATA
};
