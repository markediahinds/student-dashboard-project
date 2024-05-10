const sortSeasonYear = (entries) => {
    const seasonOrder = {
        'Winter': 1, 'Fall': 2, 'Summer': 3, 'Spring': 4
    };

    return entries.sort((a, b) => {
        const [seasonA, yearA] = a.split(' ');
        const [seasonB, yearB] = b.split(' ');

        const yearDiff = parseInt(yearB) - parseInt(yearA);
        if (yearDiff !== 0) {
            return yearDiff;
        }

        return seasonOrder[seasonA] - seasonOrder[seasonB];
    });
  }

export default sortSeasonYear