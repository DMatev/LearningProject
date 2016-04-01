CREATE TABLE [Core].[Message](
	[MessageCode] NVARCHAR(200) NOT NULL CONSTRAINT PK_MessageCode PRIMARY KEY ([MessageCode]),
	[IsComplex] BIT NOT NULL,
	[RowRevision] ROWVERSION NOT NULL
);
