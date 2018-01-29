## STAT application - Back End

The back-end for the STAT application ([front-end](https://github.com/ffanizza10xcoding/STATapp-WebApp))


# STAT application

STAT (short for SAP Ticketing And Tracking) is an ticket tracking application, designed in SAPUI5. STAT can be used to track system issues and create test scripts that integrate directly with any SAP system. Users can avoid the need to manage additional user accounts or websites and improve their issue resolution workflow.

## Getting started with STAT

Currently, STAT is in its beta version, and needed to be set up in the SAP HANA Web-based Development Workbench.

### Prerequisites

A SAP Cloud Platform Account (Trial or Full version).

A SAP HANA DB/Schema to store the application and the server data to be accessed.

User accounts, with proper permissions.

### Installation

Clone or copy the contents of this repository into any directory of the main Content folder into the SAP HANA Web-based Development Workbench

Clone or copy the contents of the [front-end repository](https://github.com/ffanizza10xcoding/STATapp-WebApp) into any directory of the main Content folder into the SAP HANA Web-based Development Workbench

In the tables, edit the initial data as required, including users and functional areas. Note that the ticket priorities and ticket statuses can also be edited, but may have issues if they are not initialized to the defaults as defined in the csv files in the [loads folder](https://github.com/ffanizza10xcoding/STATapp-BackEnd/statapp/data/loads).

## Using STAT

Launch the application from the [index.html](/index.html) file

The application, when launched, can be accessed directly using this URL. (The server must be started prior to accessing the web app, if not already started)

After accessing the application, a user can navigate the application by clicking on the tiles. The "Open Tickets" tile on the homepage navigates to the main application. This application shows a list of tickets, which can be filtered or sorted from the icons on the footer bar. Also on the footer is a button to add a new ticket. Each ticket can be clicked to navigate to a details, comments, and attachemnt page. This "details" page has tabs to navigate between these three views. From the details tab, a user can click the edit icon (the pencil) to navigate to the edit ticket page, where details about a ticket can be edited.

## Built with

* SAPUI5 - An SAP UI framework built from OpenUI5
* SAP HANA - A column-based relational database system

## Authors

* **Francesco Fanizza** - [10xCoding](10xcoding.com)
* **Nestor Lara** - [10xCoding](10xcoding.com)
* **Matthew Jacoby** - [10xCoding](10xcoding.com)

## License

This application and project is licensed under the GNU Affero General Public License [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html#section13). See the [attached license](/) for details.

## Acknowledgments

* SAP - for SAP HANA, and SAPUI5, and their countless blog and forum posts
