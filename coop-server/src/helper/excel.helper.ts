class ExcelHelper {
  createTableData(
    ws: any,
    configs: any[],
    data: any[],
    isNumbered = false,
    startCol = 1,
    startRow = 3,
    defaultWidth = 20,
    isExportForGift = false,
    dateData: any = {}
  ) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // add column STT
    isNumbered &&
      configs.unshift({
        title: 'STT',
        width: 10,
        isNumberedCol: true
      });

    // Set width
    configs.forEach((config, index) => {
      ws.column(index + startCol).setWidth(config.width ?? defaultWidth);
    });

    const borderStyle = {
      border: {
        left: {
          style: 'thin',
          color: 'black'
        },
        right: {
          style: 'thin',
          color: 'black'
        },
        top: {
          style: 'thin',
          color: 'black'
        },
        bottom: {
          style: 'thin',
          color: 'black'
        }
      }
    };
    const headerStyle = {
      // fill: {
      //   type: 'pattern',
      //   patternType: 'solid',
      //   bgColor: '#d7d9db', // gray color
      //   fgColor: '#d7d9db' // gray color
      // },
      font: { bold: true, name: 'Times New Roman' },
      alignment: { horizontal: 'center' }
    };

    if (isExportForGift) {
      ws.cell(4, 1, 4, 11, true)
        .string('DANH SÁCH TẶNG QUÀ')
        .style({
          alignment: {
            horizontal: 'center',
            vertical: 'center'
          },
          font: { bold: true, size: 14, name: 'Times New Roman' }
        });

      ws.cell(5, 1, 5, 11, true)
        .string(`TỪ NGÀY ${dateData.date_from || '...'} ĐẾN NGÀY ${dateData.date_to || '...'}`)
        .style({
          alignment: {
            horizontal: 'center',
            vertical: 'center'
          },
          font: { bold: true, size: 14, name: 'Times New Roman' }
        });
    }

    // create head row
    configs.forEach((config, index) => {
      ws.cell(startRow, index + startCol)
        .string(config.required ? `${config.title} *`.toUpperCase() : config.title.toUpperCase())
        .style({ ...borderStyle, ...headerStyle });
    });

    // create data rows
    data.forEach((item, index) => {
      const indexRow = index + (startRow + 1);
      let indexCol = startCol;

      configs.forEach((config) => {
        const itemValue = config.isNumberedCol ? index + 1 : item[config.key];
        ws.cell(indexRow, indexCol++)
          .string(
            (
              (typeof config.transform === 'function'
                ? config.transform(itemValue, item, index)
                : itemValue) || ''
            ).toString()
          )
          .style(item.style ? { ...borderStyle, ...item.style } : borderStyle);
        // add validation
        if (config.validation) {
          /// find potition of cell to apply validation
          config.validation.sqref = `${ALPHABET[indexCol - 2]}2:${ALPHABET[indexCol - 2]}100`;
          ws.addDataValidation(config.validation);
        }
      });
    });
  }
}

export default new ExcelHelper();
