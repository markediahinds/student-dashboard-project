const splitString = (data) => {
    const cohortEntries = [];

    data.forEach(item => {
        const { cohortCode } = item.cohort;
        const season = cohortCode.match(/[A-Za-z]+/)[0];
        const year = parseInt(cohortCode.match(/\d+/)[0]);

        const formattedSeason = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();
        const seasonYearCombination = `${formattedSeason} ${year}`;

        if (!cohortEntries.includes(seasonYearCombination)) {
            cohortEntries.push(seasonYearCombination);
        }
    });

    return cohortEntries;
};

export default splitString;

