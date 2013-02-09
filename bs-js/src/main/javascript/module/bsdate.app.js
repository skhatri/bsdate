/*global document*/
/*global jQuery*/
/*global Option*/
/*global app*/

(function ($) {
    "use strict";
    $(document).ready(
        function () {
            var adMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
                    "October", "November", "December" ],
                bsMonths = [ "Baisakh", "Jestha", "Ashaad", "Shrawan", "Bhadra", "Ashwin", "Kartik", "Mangsir",
                    "Poush", "Magh", "Falgun", "Chaitra" ],
                numberOfMonths = app.MONTHS_IN_YEAR,
                adDates = app.AD_MAX_DAY,
                yearVal = new Date().getYear(),
                i = 0;
            if (yearVal < 1000) {
                yearVal = app.DATE_FIX_VAL + yearVal;
            }

            for (i = app.START_YEAR; i <= app.END_YEAR; i += 1) {
                $("#adYear").append(new Option(i - app.DIFF_YEAR, i - app.DIFF_YEAR));
                $("#bsYear").append(new Option(i, i));
            }

            for (i = 0; i < numberOfMonths; i += 1) {
                $("#adMonth").append(new Option(adMonths[i], i));
                $("#bsMonth").append(new Option(bsMonths[i], i));
            }

            for (i = 0; i < adDates; i += 1) {
                $("#bsDate").append(new Option(i + 1, i + 1));
                $("#adDate").append(new Option(i + 1, i + 1));
            }
            $("#bsDate").append(new Option(app.AD_MAX_DAY + 1, app.AD_MAX_DAY + 1));

            $("#adYear").val(yearVal);
            $("#bsYear").val(yearVal + app.DIFF_YEAR);

            $("#toAd").click(function () {
                var year = parseInt($("#bsYear").val());
                var month = parseInt($("#bsMonth").val()) + 1;
                var date = parseInt($("#bsDate").val());
                var dateValue = dateCalculator.convertToAd(year, month, date);
                $("#adResult").html(dateValue).slideDown();
            });
        }
    );
}(jQuery));